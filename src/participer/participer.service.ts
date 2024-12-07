import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participer } from 'src/Entities/Participer.entity';
import { Repository } from 'typeorm';
import { ParticiperDto } from './DTO/participer.dto';
import { User } from 'src/Entities/User.entity';
import { Project } from 'src/Entities/Project.entity';

@Injectable()
export class ParticiperService {
    constructor(
        @InjectRepository(Participer) 
        private readonly participerRepository:  Repository<Participer>,

        @InjectRepository(User)
        private readonly userRepository : Repository<User> ,

        @InjectRepository(Project)
        private readonly projectRepository : Repository<Project>
    ){}

    async createParticiper(
        participer : ParticiperDto
    ){
        const {userId , projectId} = participer;

        const user = await this.userRepository.findOne({where : {id : userId}}) //verifier si l'id de l'utilisatuer est il existe
        
        
        if(!user) throw new NotFoundException(`l'utilisatuer n'existe pas ${user}`); //si non on specifie l'erreur
        
        
        const project = await this.projectRepository.findOne({where : {id : projectId}}) //verifions que si le projet est existe 
      
        if(!project) throw new NotFoundException(`Est il vraie votre id de projets ${projectId}`); 
       
        
        const participation = this.participerRepository.create({user , project})

        return this.participerRepository.save(participation)
    }   
    async getParticiper(){
        return await this.participerRepository.find()
    }
}
