interface UserCredentials {
    username: string;
    password: string;
    rememberMe: boolean;
    activeDirectory: boolean;
    typeCredential: number;
    email?: string;
    token?: string;
}

interface User {
    email: string;
    firstName: string;
    lastName: string;
    lastNameSecond: string;
    fullName: string;
    userName: string;
    idPersona: string;
    img: string;
}

interface UserResponse {
    user: User;
    roles: string;
    token: Tokennformation;
}
