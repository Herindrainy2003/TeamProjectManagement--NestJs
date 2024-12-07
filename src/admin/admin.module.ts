import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/Entities/Admin.entity';

@Module({
    imports : [ TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController]
})
export class AdminModule {

}
