import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { ApiTags, ApiResponse, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from 'src/types/user.entity';


@ApiBearerAuth()
@ApiTags('user')
@ApiSecurity('basic')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @ApiOperation({ summary: 'Create a user' })
    @ApiResponse({ description: 'User created' })
    @Post()
    async createUser(@Body() userData: Partial<User>){
        return this.userService.createUser(userData);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Success' })
    @Get(':id')
    async getUser(@Param('id') id: number): Promise<User>{
        return this.userService.getUser(id);
    }

    @ApiOperation({ summary: 'Update a user' })
    @ApiResponse({ description: 'User updated' })
    @Put(':id/username')
    async updateUser(@Param('id') id: string, @Body('username') user: string){
        return this.userService.updateUsername(id, user);
    }

    @Get()
    async getAllUsers(){
        const user = await this.userService.getAllUsers();
        return user;
    }
}
