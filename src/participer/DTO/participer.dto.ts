import { IsString } from "class-validator";


export class Participer {
    @IsString()
    userId : number;

    @IsString()
    projectId : number;
}