import React, {useState} from 'react';

const AddColumnModal = () => {
    const [column, setColumn] = useState({title:''})


    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Create new column</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Column name </label>
                        <input type="text"
                               value={column.title}
                               onChange={e => setColumn({...column, title: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Name your Column" required/>
                    </div>

                    <button type="submit" className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {'Create column'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddColumnModal;