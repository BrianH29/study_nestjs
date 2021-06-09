import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";

@Controller('students')
export class StudentController{
@Get()
getStudents(){
    return `All Students`
}

@Get('/:studentId')
getStudentById(@Param('studentId') studentId: string){
    return `get student with id of ${studentId}`
}

@Post()
createStudent(@Body() body){
    return `create student with the following data ${JSON.stringify(body)}`
}

@Put('/:studentId')
updateStudent(
    @Param('studentId') studentId: string,
    @Body() body    
){
    console.log(body);
    return `update student with id of ${studentId} data of ${JSON.stringify(body)}`
}
}