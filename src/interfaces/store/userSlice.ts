export interface IUserDataClient {
    username: string;
    password: string;
    email: string
}

export interface IUser {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    email: string;
    id: number;
    provider: string;
    updatedAt: string;
    username: string;
}

export interface IUserDataServer {
    jwt: string;
    user: IUser
}

export interface IUserSlice {
    currentUser: IUser,
    jwt: null | string,
    loadingStatus: boolean,
    error: null | string,
}