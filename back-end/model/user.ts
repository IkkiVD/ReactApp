import { User as UserPrisma } from '@prisma/client';
import { Role } from '../types';

export class User {
    private id?: number;
    private username: string;
    private password: string;
    private role: Role;

    constructor(user: { id?: number; username: string; password: string; role: Role }) {
        this.validate(user);

        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
    }

    validate(user: { username: string; password: string; role: Role }) {
        if (!user.username?.trim()) {
            throw new Error('Username is required');
        }
        if (!user.password?.trim()) {
            throw new Error('Password is required');
        }
        if (!user.role) {
            throw new Error('Role is required');
        }
    }

    setId(id: number) {
        this.id = id;
    }

    setRole(role: Role) {
        this.role = role;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getId(): number | undefined {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    getRole(): Role {
        return this.role;
    }

    equals({ id, username, password, role }: User): boolean {
        return (
            this.id === id &&
            this.username === username &&
            this.password === password &&
            this.role === role
        );
    }

    static from({ id, username, password, role }: UserPrisma) {
        return new User({
            id,
            username,
            password,
            role: role as Role,
        });
    }
}
