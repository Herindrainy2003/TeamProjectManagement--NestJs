import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { compare } from 'bcrypt';
import { User } from 'src/Entities/User.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService : UserService){}

    async validateUser(email: string, motdepasse: string): Promise<any> {
        const user = await this.userService.findUserByEmail(email);
      console.log("user dans validate",user)
        if(!user) throw new UnauthorizedException("Veullez verifier votre email ou mot de passe");

        const isPasswordMatch = await bcrypt.compare(motdepasse , user.motdepasse ,)
      console.log("motdepasse crypter",isPasswordMatch)
        if(!isPasswordMatch) throw new UnauthorizedException("Verify your password");

        return {id : user.id}
        
      }   
}
