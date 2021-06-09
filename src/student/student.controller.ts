import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('students')
export class StudentController{
    @Get()
    getStudents(){
        return `All Students`
    }

    @Get('/:studentId')
    getStudentById(){
        return `get student by id`
    }

    @Post()
    createStudent(){
        return `create student`
    }

    @Put('/:studentId')
    updateStudent(){
        return `update student by id`
    }
}