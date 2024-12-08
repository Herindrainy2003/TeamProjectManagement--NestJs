import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participer } from "./Participer.entity";
import { Admin } from "./Admin.entity";


@Entity()
export class Project {
    
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    titre : string;


    @Column()
    description : string;

    @OneToMany(()=>Participer , (participer)=>participer.project)
    participer : Participer[]

    @ManyToOne(()=>Admin , (admin)=>admin.project)
    admin : Admin
    
}