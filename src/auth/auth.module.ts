import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './strategies/local.strategies';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entities/User.entity';


@Module({
  imports : [TypeOrmModule.forFeature([User]) ,
  PassportModule.register({ defaultStrategy: 'local' }), UserModule],
  controllers: [AuthController],
  providers: [AuthService ,UserService , LocalStrategy],
})
export class AuthModule {}
