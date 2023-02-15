import React from 'react';
import {
    FiAlignJustify,
    FiCodesandbox,
    FiGitPullRequest,
    FiLayout,
    FiList,
    FiLogOut,
    FiMessageSquare
} from "react-icons/fi";
import ButtonMenu from "./UI/ButtonMenu/ButtonMenu";
import {useSidebar} from "../store/store";

const buttons = [
    {title: 'Space', icon: <FiCodesandbox size={20}/>},
    // {title: 'Dashboard', icon: <FiLayout size={20}/>},
    // {title: 'Schedule', icon: <FiList size={20}/>},
    // {title: 'Inbox', icon: <FiMessageSquare size={20}/>},
    // {title: 'Teams', icon: <FiGitPullRequest size={20}/>},

]

const Sidebar = () => {

    const setOpen = useSidebar((state) => state.setOpen)
    const isOpen = useSidebar(state => state.isOpen)

    return (
        <div className={`${isOpen ? 'w-60' : 'w-28'} p-4 bg-white text-black absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 transition-all ease-out duration-300`}>
            <div className='flex flex-col justify-between items-center h-full'>
                <div className='w-full'>
                    <div className={`flex duration-300 justify-between items-center p-2 pb-4`}>
                        <h1 className={`font-black text-3xl block duration-300 ${!isOpen && 'opacity-0 overflow-hidden'}`}>TRL</h1>
                        <button onClick={setOpen}><FiAlignJustify size={20}/></button>
                    </div>
                    <div className='flex flex-col items-center justify-center p-2 space-y-5'>
                        {buttons.map((button, i) =>
                            <button type="button"
                                    key={i}
                                    className="text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 w-10/12
                                        text-center flex items-center transition-colors ease-in-out duration-300 focus:bg-zinc-900 focus:text-white">
                                <div className="mr-3">
                                    {button.icon}
                                </div>

                                <div className={`whitespace-pre duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                                    {button.title}
                                </div>
                            </button>
                        )}
                    </div>
                </div>

                <div className='w-full p-2 flex justify-center'>
                    <button type="button"
                            className="text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 w-10/12
                                        text-center flex items-center transition-colors ease-in-out duration-300">
                        <div className="mr-3">
                            {<FiLogOut size={20}/>}
                        </div>

                        <div className={`whitespace-pre duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                            Log out
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;