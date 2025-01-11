export type Role = 'admin' | 'student' | 'teacher';

export type UserInput = {
    id?: number;
    username?: string;
    password?: string;
    role?: Role;
};

export type BookInput = {
    id?: number;
    title: string;
    author: ProfileInput;
    description: string;
    isbn: string;
};

export type ProfileInput = {
    id?: number;
    firstName: string;
    lastName: string;
};

export type AuthenticationResponse = {
    token: string;
    username: string;
    role: string;
};
