import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from 'src/types/user.entity';


@ApiBearerAuth()
@ApiSecurity('basic')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post()
    async createUser(@Body() userData: Partial<User>){
        return this.userService.createUser(userData);
    }

    @Get(':id')
    async getUser(@Param('id') id: number): Promise<User>{
        return this.userService.getUser(id)
    }
}
