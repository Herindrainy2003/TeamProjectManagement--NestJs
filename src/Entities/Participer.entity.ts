import { ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { Admin } from "./Admin.entity";
import { Project } from "./Project.entity";


export class Participer{
   
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(()=> User , (user)=> user.participer)
    user : User

    @ManyToOne(()=> Project , (project)=> project.participer)
    project : Project;
}