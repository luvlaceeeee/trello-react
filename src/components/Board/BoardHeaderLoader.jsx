import React from 'react';
import ButtonsGroupHeaderBoard from "./ButtonsGroupHeaderBoard";

const BoardHeaderLoader = () => {
    return (
        <div className='p-2 flex flex-row justify-between items-center'>
            <div className='space-y-1 inline-flex items-center space-x-10'>
                <div>
                    <div className='inline-flex mb-2'>
                        <div className="max-w-sm animate-pulse">
                            <div className="h-8 bg-gray-200 rounded-full w-36"></div>
                        </div>
                    </div>

                    <div className='text-zinc-400'>
                        <div className="max-w-sm animate-pulse">
                            <div className="h-5 bg-gray-200 rounded-full w-36"></div>
                        </div>
                    </div>
                </div>

                {/*<div className="flex -space-x-4">*/}
                {/*    <img className="w-10 h-10 rounded-full border-2 border-amber-50"*/}
                {/*         src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
                {/*    <img className="w-10 h-10 rounded-full border-2 border-amber-50"*/}
                {/*         src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
                {/*    <div className='w-10 h-10 rounded-full bg-zinc-900 bg-opacity-80 border-2 border-amber-50 text-white text-center text-xs flex items-center justify-center'>*/}
                {/*        <span>+50</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className='flex flex-col justify-between items-start space-y-1'>
                    <div className="max-w-sm animate-pulse">
                        <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                    </div>
                    <div className="max-w-sm animate-pulse">
                        <div className="h-3 bg-gray-200 rounded-full w-36"></div>
                    </div>
                </div>

            </div>
            <div className="max-w-sm animate-pulse">
                <div className="h-12 bg-gray-200 rounded-2xl w-96"></div>
            </div>
            {/*<ButtonsGroupHeaderBoard/>*/}
        </div>
    );
};

export default BoardHeaderLoader;