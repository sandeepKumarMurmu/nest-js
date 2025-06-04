import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ): any {

        console.log("page : ", page);
        console.log("limit : ", limit);
        const userService = new UserService();

        return userService.getUser();
    }

    @Get(":id")
    getUserById(@Param('id', ParseIntPipe) id: number): any {
        console.log("id : ", id)
        const userService = new UserService();
        return userService.getUserById(id);
    }

    @Post()
    createUser() {
        const userData = { id: 1, name: 'John Doe', age: 30, email: "test@gmail.com", gneder: 'Male' };
        const userService = new UserService();
        userService.createUser(userData)
        return 'User created';
    }

}
