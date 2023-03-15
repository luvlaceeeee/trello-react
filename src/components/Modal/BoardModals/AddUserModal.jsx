import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getLink, getUser} from "../../../API/Service";
import {useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import LoadingScreen from "../../UI/LoadingScreen";

const AddUserModal = () => {
    const userId = useUser(state => state.id)
    const {boardId} = useParams()
    const queryString = window.location.href.split('/').slice(0, 3);
    const URL = queryString.join('/')

    const [login, setLogin] = useState({title:''})

    const {isLoading, error, data, refetch} = useQuery(["get-link", boardId, userId], () => getLink(boardId, userId), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setLogin({title: URL + '/invite/' + data})
    });

    if (isLoading) return (
        <LoadingScreen isLoading={true}/>
    )

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Add user</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Invite link </label>
                        <input type="text"
                               disabled={true}
                               value={login.title}
                               onChange={e => setLogin({...login, title: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Login" required/>
                    </div>

                    {/*<button type="submit" className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">*/}
                    {/*    {'Copy link'}*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;