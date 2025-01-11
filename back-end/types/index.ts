export type Role = 'admin' | 'student' | 'teacher';

export type UserInput = {
    id?: number;
    username?: string;
    password?: string;
    role?: Role;
};

export type AuthenticationResponse = {
    token: string;
    username: string;
    role: string;
};
