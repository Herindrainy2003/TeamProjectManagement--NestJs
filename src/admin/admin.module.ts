import { Module, ValidationPipe } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/Entities/Admin.entity';
import { AdminService } from './admin.service';
import { APP_PIPE } from '@nestjs/core';


@Module({
    imports : [ TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [{
    provide : APP_PIPE ,
    useValue : new ValidationPipe({
      whitelist :true ,
      forbidNonWhitelisted :true
      
    })
  },AdminService]
})
export class AdminModule {

}
