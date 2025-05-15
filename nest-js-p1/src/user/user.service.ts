// import { Injectable } from '@nestjs/common';

interface User { id: number, name: string, age: number, email: string, gneder: string }
// @Injectable()
export class UserService {
    userData: User[] = [
        { id: 1, name: 'John Doe', age: 30, email: "test@gmail.com", gneder: 'Male' },
        { id: 2, name: 'john two', age: 30, email: "two@gmail.com", gneder: 'Female' },
    ];

    createUser(user: User) {
        this.userData.push(user);
    }

    getUser() {
        return this.userData;
    }

    getUserById(id: number) {
        return this.userData.find(use => use.id === id);
    }
}
