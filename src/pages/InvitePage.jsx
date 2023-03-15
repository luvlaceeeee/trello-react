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
        <div>
            <Link to='/space'>
                <div className='flex justify-center'>
                    <button type="button"
                            className="text-white bg-zinc-800 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={() => mutation.mutate()}>
                        Accept invite
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default InvitePage;