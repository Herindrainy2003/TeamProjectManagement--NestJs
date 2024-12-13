import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService: AuthService){
        super({
            usernameField : 'email',
        })
     
    }

    
    
    Validate(email : string , motdepasse : string){
        console.log("un tour vers la strategies")
        const user = this.authService.validateUser(email , motdepasse);
        if(!user) throw new NotFoundException("absence de l'utilisateur")
            console.log(email , motdepasse)
        console.log(user)
        return user;
    }
}