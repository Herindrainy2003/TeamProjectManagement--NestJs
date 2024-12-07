import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.entity";


export class Admin{
    
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    nom : string ;

    @Column()
    email : string ;

    @Column()
    motdepasse : string;

    @OneToMany(()=>Project , (project)=>project.admin)
    project : Project[];
}