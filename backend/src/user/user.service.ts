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

    async getUser(id: any): Promise<User>{
        const user = await this.userRepository.findOne({ where: {id} });
        return user;
    }

    async getAllUsers(){
        return this.userRepository.find();
    }

    async searchUser(query: string): Promise<User[]>{
        const users = await this.userRepository
            .createQueryBuilder('user')
            .where(`user.name LIKE :query`, {query: `%${query}%` })
            .getMany();

        return users;
    }

    async updateUsername(id: any, username: string){
        const user = await this.userRepository.findOne(id);

        if(!user){
            throw new Error('User not found'); 
        }
        user.name = username;
        return this.userRepository.save(user);
    }
}

