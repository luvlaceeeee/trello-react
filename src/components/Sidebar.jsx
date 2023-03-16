import React from 'react';
import {FiAlignJustify, FiLogOut} from "react-icons/fi";
import {useSidebar} from "../store/uiStore";
import {Link, Outlet} from "react-router-dom";
import {useUser} from "../store/store";

const Sidebar = () => {
    const avatar = useUser(state => state.avatar)
    const logout = useUser(state => state.logout)
    const userName = useUser(state => state.name) + ' ' + useUser(state => state.surname)

    const setOpen = useSidebar((state) => state.setOpen)
    const isOpen = useSidebar(state => state.isOpen)
    const buttons = useSidebar((state => state.buttons))

    return (
        <>
            <div
                className={`${isOpen ? 'w-60' : 'w-28'} p-4 bg-white text-black absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 transition-all ease-out duration-300`}>
                <div className='flex flex-col justify-between items-center h-full'>
                    <div className='w-full'>

                        <div className={`flex justify-between items-center duration-300 pl-6 p-2 pb-4 h-16`}>
                            <button onClick={setOpen}><FiAlignJustify size={20}/></button>
                            <Link to='/welcome'>
                                <img
                                    src="https://sun9-15.userapi.com/impg/OQ3fcj2LRoWtOuRwvUUR3fyohJvgx6JCe-nmuw/dsnoitMK17I.jpg?size=874x816&quality=96&sign=8d828a5a71f4c6076f3e7b8e1022bf26&type=album"
                                    alt=""
                                    width={40}
                                    height={50}
                                    className={`${!isOpen && 'opacity-0 overflow-hidden hidden'}`}/>
                            </Link>
                        </div>

                        <div className='flex flex-col items-start justify-center p-2 space-y-5'>
                            {buttons.map((button, i) =>
                                <Link to={button.link} key={i}>
                                    <button type="button"
                                            className={`${isOpen ? 'w-44' : 'w-14'} text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 text-center flex items-center transition-colors ease-in-out duration-300 focus:bg-zinc-900 focus:text-white`}>
                                        <div className="mr-3">
                                            {button.icon}
                                        </div>

                                        <div
                                            className={`whitespace-pre duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                                            {button.title}
                                        </div>
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='p-2 flex justify-center items-center'>
                            <button type="button"
                                    className="text-zinc-900 bg-white font-bold rounded-xl text-sm p-3 px-4 pl-2 w-10/12
                                        text-center flex items-center transition-colors ease-in-out duration-300">
                                <div className="mr-3">
                                    <img
                                        src={avatar}
                                        alt=""
                                        className="w-8 h-8 rounded-full min-w-fit"/>
                                </div>

                                <div
                                    className={`whitespace-pre break-all duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                                    {userName}
                                </div>
                            </button>
                        </div>

                        <div className='p-2'>
                            <Link to={'/welcome'} className={'w-full flex justify-center items-center'}>
                                <button type="button"
                                        className="text-zinc-900 bg-white hover:bg-red-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 w-10/12
                                        text-center flex items-center transition-colors ease-in-out duration-300"
                                        onClick={() => logout()}>
                                    <div className="mr-3">
                                        {<FiLogOut size={20}/>}
                                    </div>

                                    <div
                                        className={`whitespace-pre duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                                        Log out
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <Outlet/>
        </>
    );
};

export default Sidebar;