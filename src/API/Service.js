import axios from "axios";

// export const Service = {
//     async getAllBoards(userId) {
//         return axios.get('http://176.212.185.97:7841/boards', {
//             params: {
//                 userId: userId,
//             }
//         })
//     },
// }

export const getAllBoards = (userId) => {
    const {data} = axios.get('http://176.212.185.97:7841/boards', {
        params: {
            userId: userId,
        }
    })
    return data
}

export const test = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return data
}