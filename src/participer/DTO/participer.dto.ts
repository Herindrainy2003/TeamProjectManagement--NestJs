import { IsInt, IsString } from "class-validator";


export class ParticiperDto {
    @IsInt()
    userId : number;

    @IsInt()
    projectId : number;
}