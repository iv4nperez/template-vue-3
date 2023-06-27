import { TokenInformation } from "./AuthenticateToken";

export interface UserCredentials {
    username: string;
    password: string;
    rememberMe: boolean;
    activeDirectory: boolean;
    typeCredential: number;
    email?: string;
    token?: string;
}

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    lastNameSecond: string;
    fullName: string;
    userName: string;
    idPersona: string;
    img: string;
}

export interface UserResponse {
    user: User;
    roles: string;
    token: TokenInformation;
}
