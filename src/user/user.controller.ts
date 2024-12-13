import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';
import { param } from './DTO/param.dto';

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
    
    @Get(":id")
    getUserOne(
        @Param("id" , ParseIntPipe) id
    ){
        return this.userSevice.get(id)
    }

    @Get(":email")
    getUserByemail(
        @Param("email") email : string
    ){
        console.log(email)
        return this.userSevice.findUserByEmail(email)
    }

    @Delete(":id")
    deleteUser(
        @Param() id :number
    ){
        return this.userSevice.deleteUser(id)
    }
}
