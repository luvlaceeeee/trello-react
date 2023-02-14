import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";
import IconButton from "./UI/IconButton/IconButton";
import {FiChevronDown} from "react-icons/fi";
import App from "../App";
import {useSidebar} from "../store/store";

const Test = () => {
    const isOpen = useSidebar(state => state.isOpen)
    return (
        <div>
            <Sidebar isOpen={isOpen}/>
                <Content isOpen={isOpen}>
                    <header className='bg-white text-black p-4 shrink-0 basis-auto border-b-2 border-zinc-400 border-opacity-20'>
                        <div className='p-2 inline-flex items-center space-x-2'>
                            <div>
                                <div className='inline-flex space-x-2'>
                                    <h1 className='font-bold text-2xl'>RNI Studio Space</h1>
                                    <IconButton icon={<FiChevronDown/>}/>
                                </div>

                                <div className='text-zinc-400'>
                                    <span>17 Running Projects</span>
                                </div>
                            </div>
                            <div className="flex -space-x-4">
                                <img className="w-10 h-10 rounded-full border-2 border-amber-50"
                                     src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                                <img className="w-10 h-10 rounded-full border-2 border-amber-50"
                                     src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                                <div className='w-10 h-10 rounded-full bg-zinc-900 bg-opacity-80 border-2 border-amber-50 text-white text-center text-xs flex items-center justify-center'>
                                    <span>+50</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="p-4 flex space-x-3 overflow-auto scroll-smooth flex-1 scrollbar">
                        <App/>
                    </div>
                </Content>
        </div>
    );
};

export default Test;