import { Controller, Post, UseGuards ,Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Request() req){
  //   console.log(req.body);
  //   return req.user;
  // }

  @Post('login')
  async getUsers(@Request() req){
    return await this.authService.validateUser(req.body.email , req.body.motdepasse)
}
}
