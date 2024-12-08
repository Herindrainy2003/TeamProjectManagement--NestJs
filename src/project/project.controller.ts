import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './DTO/project.dto';

@Controller('project')
export class ProjectController {
    constructor(
        private projectService: ProjectService
    ){}

    @Get()
    getProject(){
        return this.projectService.getProject()
    }

    @Post()
    createProject(
        @Body() project : ProjectDto
    ){
        return this.projectService.createProject(project)
    }
}
