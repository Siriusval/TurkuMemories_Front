/**
 * Create an axios object named 'apis'
 * It allows us to centralize all APIs in one variable for easier calls
 *
 * Naming convention : https://restfulapi.net/resource-naming/
 */
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4500/api',
});
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

/* --- MEMORIES MANAGEMENT ---
 *  api : /memory-management
 */

const basePathMemories = '/memory-management';

/**
 * POST : add one memory to database
 * @param {*} payload
 */
export const createMemory = payload =>
    api.post(`${basePathMemories}/memories`, payload);

/**
 * GET : retrieve one memory from database
 */
export const getMemoryById = id =>
    api.get(`${basePathMemories}/memories/${id}`);

/**
 * PUT : update one memory in database
 */
export const updateMemoryById = (id, payload) =>
    api.put(`${basePathMemories}/memories/${id}`, payload);

/**
 * DELETE : remove one memory from database
 */
export const deleteMemoryById = id =>
    api.delete(`${basePathMemories}/memories/${id}`);

/**
 * GET : get all memories from database
 */
export const getAllMemories = () => api.get(`${basePathMemories}/memories`);

/**
 * GET : get all memories from database containing this <tag>
 */
export const getMemoriesByTag = tag =>
    api.get(`${basePathMemories}/memories/${tag}`);

/**
 * POST : create a report for a memory
 * @param {*} payload
 */
export const createMemoryReport = payload =>
    api.post(`${basePathMemories}/reports`, payload);

/**
 * GET : get all reports associated to one memory
 */
export const getMemoryReportsById = id =>
    api.get(`${basePathMemories}/reports/${id}`);

/* --- AUTH MANAGEMENT ---
 *  api : /auth-management
 */

const basePathAuth = '/auth-management';

/**
 * POST : check login for a local user
 */
export const localLogin = payload => api.post(`${basePathAuth}/login`, payload);

/**
 * POST : register a new local user
 */
export const localRegister = payload =>
    api.post(`${basePathAuth}/register`, payload);

/**
 * POST : reset password for a user
 */
export const localResetPassword = payload =>
    api.post(`${basePathAuth}/resetPassword`, payload);

/**
 * POST : check login for Google User
 */
export const googleLogin = payload =>
    api.post(`${basePathAuth}/google`, payload);

/**
 * POST : callback after google login
 */
export const googleRedirect = payload =>
    api.post(`${basePathAuth}/google/callback`, payload);

/**
 * POST : check login for Google User
 */
export const facebookLogin = payload =>
    api.post(`${basePathAuth}/facebook`, payload);

/**
 * POST : callback after google login
 */
export const facebookRedirect = payload =>
    api.post(`${basePathAuth}/redirect`, payload);

/**
 * Axios object to export, contening all the APIs to call
 */
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
};

export default apis;
