import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController{
  @Get()
  getStudents(@Param('teacherId') teacherId : string){
    return `get all students that belong to a teacher with a id of ${teacherId}`
  }

  @Put('/:studentId')
  updateStudentTeacher(
      @Param('teacherId') teacherId : string,
      @Param('studentId') studentId : string
  ){
    return `update student with id of ${studentId} from teacher id with ${teacherId}`
  }
}