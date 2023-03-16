import axios from "axios";

const BASIC_URL = 'http://localhost:7841'
axios.defaults.baseURL = BASIC_URL

export const getUser = async (code) => {
    const {data} = await axios.get('/login', {
        params: {
            code: code,
        }
    })
    return data
}

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

export const getTasksByColumnId = async (userId, boardId, columnId) => {
    const {data} = await axios.get(`/tasks`, {
        params: {
            userId: userId,
            boardId: boardId,
            columnId: columnId
        }
    })
    return data
}

export const createTask = async (userId, boardId, columnId, text, desc, tags) => {
    const { data } = await axios.post(`/tasks`,{
        text: text,
        description: desc,
        tags: tags,
        // makers: makers
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

export const updateTaskText = async (userId, boardId, columnId, taskId, text, desc) => {
    const { data } = await axios.put(`/tasks/${taskId}`,{
        text: text,
        description: desc,
    },{
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

export const deleteTaskTag = async (userId, boardId, taskId, tagId) => {
    const { data } = await axios.delete(`/tags/${tagId}/unpin`,{
        params: {
            userId: userId,
            boardId: boardId,
            taskId: taskId
        }
    })
    return data
}

export const addTaskTag = async (userId, boardId, taskId, tagId) => {
    const { data } = await axios.put(`/tags/${tagId}/pin`, {

    },{
        params: {
            userId: userId,
            boardId: boardId,
            taskId: taskId
        }
    })
    return data
}

export const getCommentsByTaskId = async (userId, boardId, taskId) => {
    const {data} = await axios.get(`/comments`, {
        params: {
            userId: userId,
            boardId: boardId,
            taskId: taskId
        }
    })
    return data
}

export const createCommentByTaskId = async (userId, boardId, taskId, text) => {
    const {data} = await axios.post(`/comments`, {
        text: text
    },{
        params: {
            userId: userId,
            boardId: boardId,
            taskId: taskId
        }
    })
    return data
}

export const getLink = async (boardId, userId) => {
    const {data} = await axios.get(`/boards/${boardId}/link`, {
        params: {
            userId: userId,
        }
    })
    return data
}

export const acceptInvite = async (userId, inviteCode) => {
    const {data} = await axios.put(`/${inviteCode}`, {}, {
        params: {
            userId: userId,
        }
    })
    return data
}

export const deleteComment = async (userId, boardId, commentId) => {
    const {data} = await axios.delete(`/comments/${commentId}`, {
        params: {
            userId: userId,
            boardId: boardId
        }
    })
    return data
}

export const addUserToTask = async (userId, boardId, taskId, memberId) => {
    const {data} = await axios.put(`/tasks/${taskId}/makers`, {
        userId: memberId
    }, {
        params: {
            userId: userId,
            boardId: boardId
        }
    })
    return data
}