import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.entity";
import * as bcrypt from "bcrypt";
@Entity()
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

    @BeforeInsert()
    async hashPassword(){
        this.motdepasse = await bcrypt.hash(this.motdepasse , 10);
    }
}