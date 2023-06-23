interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
}

interface UserAdmin extends User {
    adminSince: Date;
}
