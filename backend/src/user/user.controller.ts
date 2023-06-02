import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        const createdUser = await this.userService.createUser(createUserDto);
        return createdUser;
    }
}
