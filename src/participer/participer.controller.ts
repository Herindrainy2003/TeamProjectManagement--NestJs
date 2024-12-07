import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParticiperService } from './participer.service';
import { ParticiperDto } from './DTO/participer.dto';

@Controller('participer')
export class ParticiperController {
    constructor(private particperService : ParticiperService ){}

    @Get()
    getParticipation(){
        return this.particperService.getParticiper()
    }

    @Post()
    createParticipation(
        @Body() participation : ParticiperDto
    ){
        return this.particperService.createParticiper(participation)
    }
}
