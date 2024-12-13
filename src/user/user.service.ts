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
    async get(id : number){
        return await this.userRepository.findOne(
            {
                where: { id: id }
            }, 
        )
    }

    //recuperation des utilisateurs par email
    // async findUserByEmail(email : string){
    //     return await this.userRepository.findOneBy({email });
    // }

    async findUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.userRepository.findOneBy({ email });
        console.log(`User found: ${JSON.stringify(user)}`);
        return user;
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
