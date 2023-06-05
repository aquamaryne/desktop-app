import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/types/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {} 
    
    async createUser(userData: Partial<User>): Promise<User>{
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    async getUser(id: number): Promise<User>{
        const user = this.userRepository.findOne({ where: {id} });
        return user;
    }
}

