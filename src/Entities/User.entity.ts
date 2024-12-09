import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participer } from "./Participer.entity";
import * as bcrypt from "bcrypt";
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

    //avant de l'insertion , on veut crypter le mot de passe avec bcrypt et on recupere le mot de passe
    @BeforeInsert()
   async hashPassword(){
     this.motdepasse = await bcrypt.hash(this.motdepasse, 10);
    }
}