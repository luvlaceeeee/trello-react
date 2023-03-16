import React, {useState} from 'react';
import {useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import {FiAlignLeft, FiClock, FiHash, FiMessageSquare, FiX} from "react-icons/fi";
import Tag from "../../UI/Tag/Tag";
import {useMutation, useQuery} from "@tanstack/react-query";
import {createCommentByTaskId, deleteComment, getCommentsByTaskId} from "../../../API/Service";
import LoadingScreen from "../../UI/LoadingScreen";

const TaskModal = ({title, tags, columnId, taskId, desc, columnTitle, members}) => {
    const userId = useUser(state => state.id)
    const {boardId} = useParams()

    const [commentText, setCommentText] = useState('')

    const {
        isLoading,
        data,
        refetch
    } = useQuery(["all-comments", userId, boardId, taskId], () => getCommentsByTaskId(userId, boardId, taskId), {
        refetchOnWindowFocus: false
    });

    const mutation = useMutation(["add-comment", userId, boardId, taskId, commentText], () => createCommentByTaskId(userId, boardId, taskId, commentText), {
        onSuccess: () => {
            refetch()
        }
    })

    const mutationDeleteComment = useMutation(["delete-comment"], (commentId) => deleteComment(userId, boardId, commentId), {
        onSuccess: () => {
            refetch()
        }
    })

    if (isLoading) return (
        <LoadingScreen isLoading={true}/>
    )

    return (
        <div
            className="relative scrollbar mx-auto my-20 bg-white rounded-2xl rounded-r-none shadow-2xl max-w-2xl overflow-y-scroll h-4/5">
            <div className="px-8 py-8">
                <div className='mb-10'>
                    <div className='mb-1 flex items-center'>
                        <FiHash size={20} className='mr-2'/>
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    </div>

                    <div className='px-7'>
                        <div className='mb-4 flex justify-between items-center'>
                        <span className='text-sm text-zinc-400'>In column <span
                            className='underline decoration-2'>{columnTitle}</span></span>
                            <div className='flex space-x-1 items-center text-gray-400'>
                                <span className='text-xs'>10 Nov 2021</span>
                                <FiClock/>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-1/2'>
                                <div className='mb-1'><span className='uppercase text-sm font-bold'>Tags</span></div>
                                <div className='flex flex-wrap content-start items-center h-auto'>
                                    {tags.sort((a, b) => a.title.localeCompare(b.title)).map((tag, i) => {
                                        return <div className='flex'>
                                            <Tag key={i} title={tag.title} color={tag.color} className={'mr-1 mb-1'}/>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='mb-1'><span className='uppercase text-sm font-bold'>Members</span></div>
                                {members.map(member => {
                                    return <div className='flex flex-col space-y-2 h-auto'>
                                        <div className='flex space-x-2 items-center'>
                                            <img className="w-8 h-8 rounded-full"
                                                 src={member.avatar}
                                                 alt=""/>
                                            <span>{member.name + ' ' + member.surname}</span>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='mb-1 flex items-center'>
                        <FiAlignLeft size={20} className='mr-2'/>
                        <h3 className="text-lg font-bold text-gray-900">Description</h3>
                    </div>
                    <div className='px-7 break-all'>
                        <span>{desc}</span>
                    </div>
                </div>

                <div className='flex items-center'>
                    <FiMessageSquare size={20} className='mr-2'/>
                    <h3 className="text-lg font-bold text-gray-900">Comments</h3>
                </div>

                <div className='px-7 py-3'>
                    {data.length === 0 ? 'No comments :(' :
                        data.map((comment) => {
                            return <div className='mb-3 p-3 bg-slate-200 rounded-lg border border-zinc-300'>
                                <article>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className='flex items-center space-x-4'>
                                            <img className="w-10 h-10 rounded-full"
                                                 src={comment.user.avatar}
                                                 alt=""/>
                                            <div className="space-y-1 font-medium">
                                                <p>{comment.user.fullName}
                                                    <time dateTime="2018-07-07"
                                                          className="block text-sm font-light text-gray-500">{comment.date.split('T').join(' ').split('.').slice(0, 1)}</time>
                                                </p>
                                            </div>
                                        </div>
                                        {userId === comment.user.id ? <button onClick={() => mutationDeleteComment.mutate(comment.id)}>
                                            <FiX/>
                                        </button> : null}
                                    </div>
                                    <p className="mb-2 text-gray-500">
                                        {comment.text}
                                    </p>
                                </article>
                            </div>
                        })}
                </div>

                <div className='px-7 mb-1'>
                    <form>
                        <div className="flex items-center px-3 py-2 rounded-lg bg-slate-200 border border-zinc-300">
                            <textarea id="chat" rows="1"
                                      value={commentText}
                                      onChange={e => setCommentText(e.target.value)}
                                      className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 outline-none resize-none"
                                      placeholder="Your message..."></textarea>
                            <button type="submit"
                                    onClick={(event) => {
                                        event.preventDefault()
                                        mutation.mutate()
                                        setCommentText('')
                                    }}
                                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer">
                                <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="black"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default TaskModal;