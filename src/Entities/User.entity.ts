import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participer } from "./Participer.entity";

@Entity()
export class User  {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    nom : string;

    @Column()
    email : string;

    @Column()
    motdepasse : string;

    @OneToMany(()=>Participer , (participer)=> participer.user)
    participer : Participer[];
}