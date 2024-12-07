import { IsEmail, IsString } from "class-validator";

export class Admin {
    @IsString()
    nom : string;

    @IsEmail({} , {message: "veuillez verifier votre email S'il vous plait"})
    email : string;

    @IsString()
    motdepasse : string;
}