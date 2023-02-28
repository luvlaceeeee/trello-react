import React from 'react';
import {tagColor} from "../../../utils/tagColor";
import IconButton from "../IconButton/IconButton";
import {FiX} from "react-icons/fi";
import {useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {deleteBoardTag, updateBoardById} from "../../../API/Service";
import ButtonLoader from "../ButtonLoader";

const Tag = ({title, color, className, tagId, refetch, deleted}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    const mutation = useMutation(["delete-board-tag", userId, boardId, tagId], () => deleteBoardTag(userId, boardId, tagId), {
        onSuccess: () => {
            refetch()
        }
    })

    const handleClick = () => {
        mutation.mutate()
    }

    return (
        <div className={`flex flex-row items-center ${className}`}>
            <div className={`${tagColor(color)}  grow-0 shrink-0 text-xs font-bold px-2.5 py-1 h-5.5 rounded text-center flex items-center`}>
                {title}
            </div>
            {deleted && mutation.isLoading ? <ButtonLoader className={'ml-1'}/> : <button onClick={handleClick} className='text-zinc-400 ml-1'><FiX size={15}/></button>}
        </div>
    );
};

export default Tag;