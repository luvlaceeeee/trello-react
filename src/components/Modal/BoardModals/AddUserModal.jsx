import React, {useState} from 'react';

const AddUserModal = () => {
    const [login, setLogin] = useState({title:''})

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Add user</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            User login </label>
                        <input type="text"
                               value={login.title}
                               onChange={e => setLogin({...login, title: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Login" required/>
                    </div>

                    <button type="submit" className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {'Add login'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;