import React from 'react';

const DeleteModal = ({title, onClick}) => {
    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="text-xl font-bold text-gray-900">Delete board</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-lg text-gray-900">
                            You want to delete {title} board?
                        </label>
                    </div>
                    <div className='flex justify-around items-center space-x-2.5'>
                        <button className="w-full text-white bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Yes
                        </button>
                        <button onClick={onClick} className=" w-full text-white bg-red-300 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;