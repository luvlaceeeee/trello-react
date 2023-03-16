import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {acceptInvite} from "../API/Service";
import {useUser} from "../store/store";

const InvitePage = () => {
    const userId = useUser(state => state.id)
    const {inviteCode} = useParams()
    console.log(userId)

    const mutation = useMutation(["accept-invite", userId, inviteCode], () => acceptInvite(userId, inviteCode), {})

    return (
        <div className='flex flex-col justify-around h-screen items-center'>
            <div className='flex flex-col items-center'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">You were invited to the board</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
                    Click on button to accept invite</p>
            </div>

            <Link to='/space'>
                <div className='flex justify-center'>
                    <button type="button"
                            className="text-white bg-zinc-800 hover:bg-zinc-900 font-medium rounded-lg text-lg px-10 py-5" onClick={() => mutation.mutate()}>
                        Accept invite
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default InvitePage;