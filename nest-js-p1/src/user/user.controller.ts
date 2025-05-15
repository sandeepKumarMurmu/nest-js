import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    @Get()
    getUsers(): any {
        const userService = new UserService();
        return userService.getUser();
    }

    @Get(":id")
    getUserById(@Param('id') id: any): any {
        const userService = new UserService();
        return userService.getUserById(+id);
    }

    @Post()
    createUser() {
        const userData = { id: 1, name: 'John Doe', age: 30, email: "test@gmail.com", gneder: 'Male' };
        const userService = new UserService();
        userService.createUser(userData)
        return 'User created';
    }

}
