import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/Entities/Admin.entity';
import { Project } from 'src/Entities/Project.entity';
import { Repository } from 'typeorm';
import { ProjectDto } from './DTO/project.dto';
import { updateProject } from './DTO/updateProject.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectRepository : Repository<Project> , 

        @InjectRepository(Admin)
        private adminRepository : Repository<Admin>
    ){}

    async getProject(){
        return await this.projectRepository.find()
    }

    async createProject(
        project : ProjectDto
    ){
        const {titre , description , adminId} = project
       
        const admin = await this.adminRepository.findOne({where :{id : adminId}})
       
        if(!admin) throw new NotFoundException("Verifier si l'admin est bien exister")

            const newProject = this.projectRepository.create({titre,description,admin})

            return this.projectRepository.save(newProject);
    }

}
