import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController{
  @Get()
  getTeachers(){
    return `All teachers`
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId : string){
    return `get teacher by id ${teacherId}`
  }

}