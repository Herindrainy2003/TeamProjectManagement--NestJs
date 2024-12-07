import { IsString } from "class-validator";


export class ParticiperDto {
    @IsString()
    userId : number;

    @IsString()
    projectId : number;
}