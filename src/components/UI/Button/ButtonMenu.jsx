import React from 'react';

const ButtonMenu = ({title, icon, onClick}) => {
    return (
        <button type="button"
                className="text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white font-bold rounded-xl text-sm p-3 px-4 w-full
                text-center inline-flex items-center transition-colors ease-in-out duration-300" onClick={onClick}>
            <div className="mr-3">
                {icon}
            </div>
            {title}
        </button>
    );
};

export default ButtonMenu;