/**
 * Create an axios object named 'apis'
 * It allows us to centralize all APIs in one variable for easier calls
 *
 * Naming convention : https://restfulapi.net/resource-naming/
 */
import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: "http://localhost:4500/api",
});
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

/* --- MEMORIES MANAGEMENT ---
 *  api : /memory-management
 */

const basePathMemories = "/memory-management";

/**
 * POST : add one memory to database
 * @param {*} payload
 */
const createMemory = (memory): Promise<AxiosResponse> => {
    const payload = JSON.stringify(memory);
    return api.post(`${basePathMemories}/memories`, payload);
};

/**
 * GET : retrieve one memory from database
 */
const getMemoryById = (id: any) =>
    api.get(`${basePathMemories}/memories/${id}`);

/**
 * PUT : update one memory in database
 */
const updateMemoryById = (id: any, payload: any) =>
    api.put(`${basePathMemories}/memories/${id}`, payload);

/**
 * DELETE : remove one memory from database
 */
const deleteMemoryById = (id: any) =>
    api.delete(`${basePathMemories}/memories/${id}`);

/**
 * GET : get all memories from database
 */
const getAllMemories = () => api.get(`${basePathMemories}/memories`);

const getMemoriesByCategory = (categoryId: any) =>
    api.get(`${basePathMemories}/memories`, {
        params: { categoryId: categoryId },
    });

/**
 * POST : create a report for a memory
 * @param {*} payload
 */
const createMemoryReport = (payload: any) =>
    api.post(`${basePathMemories}/reports`, payload);

/**
 * GET : get all reports associated to one memory
 */
const getMemoryReportsById = (id: any) =>
    api.get(`${basePathMemories}/reports/${id}`);

/* --- AUTH MANAGEMENT ---
 *  api : /auth-management
 */

const basePathAuth = "/auth-management";

/**
 * POST : check login for a local user
 */
const localLogin = (payload: any) => api.post(`${basePathAuth}/login`, payload);

/**
 * POST : register a new local user
 */
const localRegister = (payload: any) =>
    api.post(`${basePathAuth}/register`, payload);

/**
 * POST : reset password for a user
 */
const localResetPassword = (payload: any) =>
    api.post(`${basePathAuth}/resetPassword`, payload);

/**
 * POST : check login for Google User
 */
const googleLogin = (payload: any) =>
    api.post(`${basePathAuth}/google`, payload);

/**
 * POST : callback after google login
 */
const googleRedirect = (payload: any) =>
    api.post(`${basePathAuth}/google/callback`, payload);

/**
 * POST : check login for Google User
 */
const facebookLogin = (payload: any) =>
    api.post(`${basePathAuth}/facebook`, payload);

/**
 * POST : callback after google login
 */
const facebookRedirect = (payload: any) =>
    api.post(`${basePathAuth}/redirect`, payload);

/* --- CATEGORIES MANAGEMENT ---
 *  api : /category-management
 */
const basePathCategories = "/category-management";

/**
 * POST : create a category
 */
const createCategory = (payload: any) =>
    api.post(`${basePathCategories}/categories`, payload);

/**
 * GET : get all categories
 */
const getAllCategories = () => api.get(`${basePathCategories}/categories`);

/**
 * Axios object to export, contening all the APIs to call
 */
export const apis = {
    memories: {
        createMemory,
        getMemoryById,
        getMemoriesByCategory,
        updateMemoryById,
        deleteMemoryById,
        getAllMemories,
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
    categories: {
        createCategory,
        getAllCategories,
    },
};
