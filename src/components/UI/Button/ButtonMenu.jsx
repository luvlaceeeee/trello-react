import React from 'react';

const ButtonMenu = ({title, icon, onClick, isOpen}) => {
    return (
        <button type="button"
                className="text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 w-10/12
                text-center flex items-center transition-colors ease-in-out duration-300" onClick={onClick}>
            <div className="mr-3">
                {icon}
            </div>

            <div className={`whitespace-pre duration-300 ${!isOpen && 'opacity-0 translate-x-16 overflow-hidden'}`}>
                {title}
            </div>
        </button>
    );
};

export default ButtonMenu;