import axios, { AxiosResponse } from 'axios';
import useTokenStore from 'entities/store';

export async function getData(url: string, param: { [key: string]: string } = {}): Promise<void | AxiosResponse<any, any>> {
    const { token } = useTokenStore();

    if (token) {
        return axios.get('https://your-api-endpoint.com/data', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { ...param }
        })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    } else {
        console.error('JWT-токен отсутствует. Войдите в систему.');
    }
}

export async function postData(url: string, body: { [key: string]: string } = {}, param: { [key: string]: string } = {}): Promise<void | AxiosResponse<any, any>> {
    const { token } = useTokenStore();

    if (token) {
        return axios.post('https://your-api-endpoint.com/data', body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { ...param }
        })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    } else {
        console.error('JWT-токен отсутствует. Войдите в систему.');
    }
}

export enum UserType {
    PATIENT = 1,
    lAB_TECHNICIAN,
    ACCOUNTANT,
    ADMINISTRATOR,
}

export interface User {
    username: string,
    password: string,
    userType: UserType
}

export async function authPost(url: string, body: User) {
    const { token } = useTokenStore();

    if (token) {
        return axios.post<User, string>('https://your-api-endpoint.com/data', body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    } else {
        console.error('JWT-токен отсутствует. Войдите в систему.');
    }
}

export async function regPost(url: string, body: User) {
    const { token } = useTokenStore();

    if (token) {
        return axios.post('https://your-api-endpoint.com/data', body.userType === UserType.PATIENT ? body: {...body, responce_user: token}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    } else {
        console.error('JWT-токен отсутствует. Войдите в систему.');
    }
}
