interface UserCredentials {
    username: string;
    password: string;
    rememberMe: boolean;
    activeDirectory: boolean;
    typeCredential: number;
    email?: string;
    token?: string;
}
