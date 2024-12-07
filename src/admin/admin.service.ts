import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/Entities/Admin.entity';
import { Repository } from 'typeorm';
import { AdminDto } from './DTO/admin.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin) private adminRepository: Repository<Admin>
    ){}

    async getAdmin(){
        return await this.adminRepository.find();
    }
    
    async createAdmin(
        admin : AdminDto
    ){
        return await this.adminRepository.save(admin)
    }

    async deleteAdmin(id : number){
        return await this.adminRepository.delete(id)
    }
}
