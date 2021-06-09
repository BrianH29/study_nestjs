import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto'

@Controller('teachers')
export class TeacherController{
  @Get()
  getTeachers(): FindTeacherResponseDto{
    return `All teachers`
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId : string) : FindTeacherResponseDto{
    return `get teacher by id ${teacherId}`
  }

}