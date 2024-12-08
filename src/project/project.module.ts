import { Module, ValidationPipe } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/Entities/Project.entity';
import { APP_PIPE } from '@nestjs/core';
import { Admin } from 'src/Entities/Admin.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Project , Admin])],
  controllers: [ProjectController],
  providers: [{
    provide : APP_PIPE ,
    useValue : new ValidationPipe({
      whitelist :true,
      forbidNonWhitelisted : true
    })
  },ProjectService]
})
export class ProjectModule {

}
