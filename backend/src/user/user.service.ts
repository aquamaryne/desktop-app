import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/types/user.entity';
import { CreateUserDto } from 'src/dto/user.dto';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {} 
    
    async createUser(createUserDto: CreateUserDto){
        const user = this.userRepository.create(createUserDto);
        await this.userRepository.save(user);
        return user;
    }
}
