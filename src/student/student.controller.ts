import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto} from './dto/student.dto'

@Controller('students')
export class StudentController{
@Get()
getStudents(): FindStudentResponseDto[]{
    return `All Students`
}

@Get('/:studentId')
getStudentById(@Param('studentId') studentId: string) : FindStudentResponseDto{
    return `get student with id of ${studentId}`
}

@Post()
createStudent(@Body() body: CreateStudentDto): StudentResponseDto{
    return `create student with the following data ${JSON.stringify(body)}`
}

@Put('/:studentId')
updateStudent(
    @Param('studentId') studentId: string,
    @Body() body : UpdateStudentDto   
): StudentResponseDto{
    console.log(body);
    return `update student with id of ${studentId} data of ${JSON.stringify(body)}`
}
}