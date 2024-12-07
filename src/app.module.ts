import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'dbConfig';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ProjectModule } from './project/project.module';
import { ParticiperModule } from './participer/participer.module';



@Module({
  imports : [TypeOrmModule.forRoot(dbConfig), UserModule, AdminModule ,ParticiperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
