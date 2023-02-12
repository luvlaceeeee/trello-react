import React from 'react';

const ButtonMenu = ({title, icon, onClick}) => {
    return (
        <button type="button"
                className="text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 font-bold rounded-lg text-sm p-2 px-3 w-36
                text-center inline-flex items-center transition-colors ease-in-out duration-300" onClick={onClick}>
            <div className="mr-3">
                {icon}
            </div>
            {title}
        </button>
    );
};

export default ButtonMenu;