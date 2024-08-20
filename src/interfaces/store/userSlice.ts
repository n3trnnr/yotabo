import { IAuthInputs } from "../../components/AuthModalWindow/AuthModalWindow";

export interface IUserFormData extends IAuthInputs { };

export interface IUserData {
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
    user: IUserData
}