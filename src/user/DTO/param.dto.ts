import { IsEmail, IsInt, IsPositive } from "class-validator";

export class param{
    @IsInt()
    @IsPositive()
    id : number
}

