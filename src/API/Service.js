import axios from "axios";

const BASIC_URL = 'http://localhost:7841'
axios.defaults.baseURL = BASIC_URL

export const getAllBoards = async (userId) => {
    const {data} = await axios.get('/boards', {
        params: {
            userId: userId,
        }
    })
    return data
}

export const createBoard = async (userId, title) => {
    const { data } = await axios.post('/boards',{
        title: title
    } ,{
        params: {
            userId: userId,
        }
    })
    return data
}

export const getBoardById = async (userId, boardId) => {
    const {data} = await axios.get(`/boards/${boardId}`, {
        params: {
            userId: userId,
        }
    })
    return data
}

export const deleteBoardById = async (userId, boardId) => {
    const {data} = await axios.delete(`/boards/${boardId}`, {
        params: {
            userId: userId,
        }
    })
    return data
}

export const updateBoardById = async (userId, boardId, title) => {
    const {data} = await axios.put(`/boards/${boardId}`,{
        title: title
    } ,{
        params: {
            userId: userId,
        }
    })
    return data
}

export const createColumn = async (userId, boardId, title) => {
    const { data } = await axios.post(`/columns`,{
        title: title
    } ,{
        params: {
            userId: userId,
            boardId: boardId
        }
    })
    return data
}

export const renameColumn = async (userId, boardId, columnId, title) => {
    const { data } = await axios.put(`/columns/${columnId}`,{
        title: title
    } ,{
        params: {
            userId: userId,
            boardId: boardId
        }
    })
    return data
}

export const deleteColumn = async (userId, boardId, columnId) => {
    const { data } = await axios.delete(`/columns/${columnId}`,{
        params: {
            userId: userId,
            boardId: boardId
        }
    })
    return data
}

export const createTask = async (userId, boardId, columnId, text, desc, tags) => {
    const { data } = await axios.post(`/tasks`,{
        text: text,
        description: desc,
        tags: tags
    },{
        params: {
            userId: userId,
            boardId: boardId,
            columnId: columnId
        }
    })
    return data
}

export const deleteTask = async (userId, boardId, columnId, taskId) => {
    const { data } = await axios.delete(`/tasks/${taskId}`,{
        params: {
            userId: userId,
            boardId: boardId,
            columnId: columnId
        }
    })
    return data
}

export const deleteBoardTag = async (userId, boardId, tagId) => {
    const { data } = await axios.delete(`/tags/${tagId}`,{
        params: {
            userId: userId,
            boardId: boardId,
        }
    })
    return data
}

export const createBoardTag = async (userId, boardId, title, color) => {
    const { data } = await axios.post(`/tags`, {
        title: title,
        color: color
    },{
        params: {
            userId: userId,
            boardId: boardId,
        }
    })
    return data
}

export const updateBoardTag = async (userId, boardId, tagId, title, color) => {
    const { data } = await axios.put(`/tags/${tagId}`, {
        title: title,
        color: color
    },{
        params: {
            userId: userId,
            boardId: boardId,
        }
    })
    return data
}



