import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './DTO/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(
        private adminService : AdminService
    ){}

    @Get()
    getAdmin(){
        return this.adminService.getAdmin();
    }

    @Post()
    createAdmin(
        @Body() admin : AdminDto
    ){
        return this.adminService.createAdmin(admin);
    }

    @Delete(":id")
    deleteAdmin(
        @Param() id : number
    ){
        return this.adminService.deleteAdmin(id)
    }
}
