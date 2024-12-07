import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private userSevice : UserService
    ){}
    
    @Get()
    getUser(){  
        return this.userSevice.getUsers()
      }

    @Post()
    createUser(
        @Body() user : UserDto
    ){
        return this.userSevice.createUser(user)
    }

    @Delete(":id")
    deleteUser(
        @Param() id :number
    ){
        return this.userSevice.deleteUser(id)
    }
}
