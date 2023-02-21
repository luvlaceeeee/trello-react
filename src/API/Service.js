import axios from "axios";

// export const Service = {
//     async test() {
//         return axios.get('https://jsonplaceholder.typicode.com/todos')
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

export const getBoardById = (userId, boardId) => {
    const {data} = axios.get(`http://176.212.185.97:7841/boards/${boardId}`, {
        params: {
            userId: userId,
        }
    })
    return data
}

export const postBoard = (userId, title) => {
    const {data} = axios.post(`http://176.212.185.97:7841/boards`, {
        title: title
    }, {
        params: {
            userId: userId,
        }
    })
    return data
}



export const test = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            _limit: 5
        }
    })
    return data
}

export const test2 = async (boardId) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${boardId}`)
    return data
}