import axios from 'axios';
import { FormDataType } from '../redux/authReducer';
import { profileType } from '../redux/profileReducer';
import { usersType } from '../redux/usersReducer';

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export type AuthMeType = {
    data: { id: number, login: string, email: string },
    fieldsErrors: Array<string>,
    messages: Array<string>,
    resultCode: ResultCodesEnum,
}

type GetUsersType = {
    error: string | null
    items: Array<usersType>
    totalCount: number
}
type CaptchaType = {
    url:string
}

type followUserType = {
    data: boolean
}
type GetStatusType = {
    data: string,
    status: number
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1f53d161-bcd3-47d8-8414-bda7e59dbf15',
    }
})

export const apiGetUsers = async (count: number, page: number) => {
    let response = await instance.get<GetUsersType>(`users?count=${count}&page=${page}`)
    return response.data
};

export const apiAuth = async () => {
    let response = await instance.get<AuthMeType>(`auth/me`);
    return response.data
};

export const apiCaptcha = async () => {
    let response = await instance.get<CaptchaType>(`/security/get-captcha-url`);
    return response.data;
};

export const apiSetProfile = async (userId: number) => {
    let response = await instance.get<profileType>(`profile/${userId}`);
    return response.data
};

export const apiGetFollowUser = async (id: number) => {
    let response = await instance.get<followUserType>(`follow/${id}`);
    return response.data
};

export const apitogglefollowUser = (id: number, value: boolean) => {
    return value ? instance.delete(`/follow/${id}`) : instance.post(`follow/${id}`);
}

export const apiGetStatus = async (userId: number) => {
    let response = await instance.get<GetStatusType>(`/profile/status/${userId}`);
    return response.data
};

export const apiUpdateStatus = (status: string) => {
    return instance.put(`/profile/status`, { status: status })
};
export const apiLogin = (objData: FormDataType) => {
    return instance.post(`/auth/login`, objData);
};
export const apiLogout = () => {
    return instance.delete(`/auth/login`)
};
export const apiUploadAvatar = (photo: string) => {
    let formData = new FormData()
    formData.append('image', photo)
    return instance.put(`/profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};
export const apiEditProfile = (objData: string) => {
    return instance.put(`/profile`, objData)
};