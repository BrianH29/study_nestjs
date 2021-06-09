import { Controller, Get, Param, Put } from '@nestjs/common';
import {FindStudentResponseDto, StudentResponseDto} from '../student/dto/student.dto'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController{
  @Get()
  getStudents(@Param('teacherId') teacherId : string): FindStudentResponseDto[]{
    return `get all students that belong to a teacher with a id of ${teacherId}`
  }

  @Put('/:studentId')
  updateStudentTeacher(
      @Param('teacherId') teacherId : string,
      @Param('studentId') studentId : string
  ): StudentResponseDto{
    return `update student with id of ${studentId} from teacher id with ${teacherId}`
  }
}