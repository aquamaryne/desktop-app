import { Repository } from "typeorm";
import { User } from "src/types/user.entity";
import { CreateUserDto } from "src/dto/user.dto";


export class UserRepository extends Repository<User>{
    async createUser(createUserDto: CreateUserDto): Promise<User>{
        const { username, email, password } = createUserDto; 

        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;

        await user.save();
        return user;
    }
}
