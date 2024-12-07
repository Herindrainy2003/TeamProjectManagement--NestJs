import { Module, ValidationPipe } from '@nestjs/common';
import { ParticiperController } from './participer.controller';
import { ParticiperService } from './participer.service';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participer } from 'src/Entities/Participer.entity';
import { User } from 'src/Entities/User.entity';
import { Project } from 'src/Entities/Project.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Participer ,User ,Project])],
  controllers: [ParticiperController],
  providers: [{
    provide : APP_PIPE,
    useValue : new ValidationPipe({
      whitelist : true ,
      forbidNonWhitelisted : true
    })
  },ParticiperService]
})
export class ParticiperModule {}
