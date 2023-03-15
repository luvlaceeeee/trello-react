import React, {useState} from 'react';
import {useBoard, useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import Tag from "../../UI/Tag/Tag";
import {FiEdit, FiX} from "react-icons/fi";
import ButtonLoader from "../../UI/ButtonLoader";

const AddUserTaskModal = ({members}) => {
    const userId = useUser(state => state.id)
    const {boardId} = useParams()
    const users = useBoard(state => state.users)

    const [isOpen, setOpen] = useState(false)


    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Task members</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            All tags </label>
                        <div className='scrollbar flex flex-col h-40 overflow-y-auto overflow-x-hidden'>
                            {members.length === 0 ?
                                <span className='font-light text-sm text-zinc-400'>No members</span> : members.map(member => {
                                    return <div>
                                        <div className={'flex items-center justify-between'}>
                                            <div className='flex flex-col space-y-2 h-auto'>
                                                <div className='flex space-x-2 items-center'>
                                                    <img className="w-8 h-8 rounded-full"
                                                         src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album"
                                                         alt=""/>
                                                    <span>asfdsASDAS</span>
                                                </div>
                                            </div>
                                            {/*<div>*/}
                                            {/*    <button className='text-zinc-400 mx-1' onClick={() => {*/}
                                            {/*        setOpenCreate(false)*/}
                                            {/*        setOpenUpdate(true)*/}
                                            {/*        setTagUpdate({tagId: tag.id, title: tag.title, color: tag.color})*/}
                                            {/*    }}>*/}
                                            {/*        <FiEdit/>*/}
                                            {/*    </button>*/}
                                            {/*    {mutationDelete.isLoading ? <ButtonLoader/> :*/}
                                            {/*        <button onClick={() => mutationDelete.mutate(tag.id)}*/}
                                            {/*                className='text-zinc-400'><FiX size={15}/></button>}*/}
                                            {/*</div>*/}
                                        </div>
                                        <hr/>
                                    </div>
                                })}
                        </div>
                    </div>

                    {/*<div className={`${isOpenCreate ? 'hidden' : ''}`}>*/}
                    {/*    <button onClick={() => {*/}
                    {/*        setOpenCreate(true)*/}
                    {/*        setOpenUpdate(false)*/}
                    {/*    }}*/}
                    {/*            className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">*/}
                    {/*        Create new tag?*/}
                    {/*    </button>*/}
                    {/*</div>*/}


                </div>
            </div>
        </div>
    );
};

export default AddUserTaskModal;