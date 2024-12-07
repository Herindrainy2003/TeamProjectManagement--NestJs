import { IsInt, IsString } from "class-validator";

export class Project {
    @IsString()
    titre : string;

    @IsString()
    description : string;

    @IsInt()
    adminId : number;
}