import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1f53d161-bcd3-47d8-8414-bda7e59dbf15',
    }
})


export const apiGetUsers = async (count, page) => {
    let response = await instance.get(`users?count=${count}&page=${page}`)
    return response.data
};

export const apiAuth = async () => {
    let response = await instance.get(`auth/me`,);
    return response.data
};

export const apiSetProfile = async (userId) => {
    let response = await instance.get(`profile/${userId}`);
    return response.data
};

export const apiGetFollowUser = async (id) => {
    let response = await instance.get(`follow/${id}`);
    return response.data
};

export const apiToogleFollowUser = (id, value) => {
    return value ? instance.delete(`/follow/${id}`) : instance.post(`follow/${id}`);
}

export const apiFollowUser = (id) => {
    return instance.post(`follow/${id}`)
};

export const apiUnfollowUser = (id) => {
    return instance.delete(`/follow/${id}`)
};

export const apiGetStatus = (userId) => {
    return instance.get(`/profile/status/${userId}`)
};

export const apiUpdateStatus = (status) => {
    return instance.put(`/profile/status`, { status: status })
};
export const apiLogin = (objData) => {
    return instance.post(`/auth/login`, objData);
};
export const apiLogout = () => {
    return instance.delete(`/auth/login`)
};