import React from 'react';
import {FiAlignJustify, FiLogOut} from "react-icons/fi";
import {useSidebar} from "../store/uiStore";
import {Link, Outlet} from "react-router-dom";

const Sidebar = () => {

    const setOpen = useSidebar((state) => state.setOpen)
    const isOpen = useSidebar(state => state.isOpen)
    const buttons = useSidebar((state => state.buttons))

    return (
        <>
        <div className={`${isOpen ? 'w-60' : 'w-28'} p-4 bg-white text-black absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 transition-all ease-out duration-300`}>
            <div className='flex flex-col justify-between items-center h-full'>
                <div className='w-full'>

                    <div className={`flex justify-between items-center duration-300 pl-6 p-2 pb-4 h-16`}>
                        <button onClick={setOpen}><FiAlignJustify size={20}/></button>
                        <Link to='/welcome'><h1 className={`font-black text-3xl block duration-300 ${!isOpen && 'opacity-0 overflow-hidden hidden'}`}>TRL</h1></Link>
                    </div>

                    <div className='flex flex-col items-start justify-center p-2 space-y-5'>
                        {buttons.map((button, i) =>
                            <Link to={button.link} key={i}>
                                <button type="button"
                                        className={`${isOpen ? 'w-full' : 'w-14'} text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 text-center flex items-center transition-colors ease-in-out duration-300 focus:bg-zinc-900 focus:text-white`}>
                                    <div className="mr-3">
                                        {button.icon}
                                    </div>

                                    <div className={`whitespace-pre duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                                        {button.title}
                                    </div>
                                </button>
                            </Link>
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

        <Outlet/>
        </>
    );
};

export default Sidebar;