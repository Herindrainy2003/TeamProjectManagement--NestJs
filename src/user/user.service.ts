import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/User.entity';
import { Repository } from 'typeorm';
import { UserDto } from './DTO/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository : Repository<User>){}
    async getUsers(){
        return await this.userRepository.find()
    }

    async createUser(
        userDto : UserDto
    ){
        const users = this.userRepository.create(userDto)
        return this.userRepository.save(users);
    }

    async deleteUser(id :number){
        return await this.userRepository.delete(id)
    }
    
}
