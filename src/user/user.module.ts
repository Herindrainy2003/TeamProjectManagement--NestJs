import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from 'src/Entities/User.entity';
import { UserService } from './user.service';
import { APP_PIPE } from '@nestjs/core';


@Module({
    imports : [TypeOrmModule.forFeature([User])] ,
  controllers: [UserController],
  providers: [{
    provide : APP_PIPE ,
    useValue : new ValidationPipe({
      whitelist :true ,
      forbidNonWhitelisted : true
    })
  },UserService]
})
export class UserModule {
}
