import { IsInt, IsString } from "class-validator";

export class ProjectDto {
    @IsString()
    titre : string;

    @IsString()
    description : string;

    @IsInt()
    adminId : number;
}