import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class TeacherController{
    @Get()
    getTeachers(){
        return `All teachers`
    }
}