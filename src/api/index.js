import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4500/api',
})

/*
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
*/

//https://restfulapi.net/resource-naming/

/* --- MEMORIES MANAGEMENT ---
 *  api : /memories
 */

const basePathMemories = '/memory-management'

export const createMemory = payload =>
  api.post(`${basePathMemories}/memories`, payload)

export const getMemoryById = id =>
  api.get(`${basePathMemories}/memories/${id}`)

export const updateMemoryById = (id, payload) =>
  api.put(`${basePathMemories}/memories/${id}`, payload)

export const deleteMemoryById = id =>
  api.delete(`${basePathMemories}/memories/${id}`)

export const getAllMemories = () =>
  api.get(`${basePathMemories}/memories`)

export const getMemoriesByTag = tag =>
  api.get(`${basePathMemories}/memories/${tag}`)

export const createMemoryReport = payload =>
  api.post(`${basePathMemories}/report`, payload)

export const getMemoryReportsById = id =>
  api.get(`${basePathMemories}/report/${id}`)

/* --- AUTH MANAGEMENT ---
 *  api : /auth
 */

const basePathAuth = '/auth'

export const localLogin = payload =>
  api.post(`${basePathAuth}/login`, payload)

export const localRegister = payload =>
  api.post(`${basePathAuth}/register`, payload)

export const localResetPassword = payload =>
  api.post(`${basePathAuth}/resetPassword`, payload)

export const googleLogin = payload =>
  api.post(`${basePathAuth}/google`, payload)

export const googleRedirect = payload =>
  api.post(`${basePathAuth}/google/callback`, payload)

export const facebookLogin = payload =>
  api.post(`${basePathAuth}/facebook`, payload)

export const facebookRedirect = payload =>
  api.post(`${basePathAuth}/redirect`, payload)

const apis = {
  memories: {
    createMemory,
    getMemoryById,
    updateMemoryById,
    deleteMemoryById,
    getAllMemories,
    getMemoriesByTag,
    createMemoryReport,
    getMemoryReportsById,
  },
  auth: {
    localLogin,
    localRegister,
    localResetPassword,
    googleLogin,
    googleRedirect,
    facebookLogin,
    facebookRedirect,
  },
}

export default apis
