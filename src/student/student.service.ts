import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {v4 as uuid} from 'uuid'; 
import { FindStudentResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from '../student/dto/student.dto'

@Injectable()
export class StudentService {
  private students = students

  getStudents(): FindStudentResponseDto[]{
    return this.students
  }

  getStudentById(studentId: string) : FindStudentResponseDto {
    return this.students.find(student => {
      return student.id === studentId
    })
  }

  createStudent(payload: CreateStudentDto) : StudentResponseDto{
    let newStudent = {
      id: uuid(), 
      ...payload
    }

    this.students.push(newStudent);
    return newStudent; 
  }

  updateStudent(studentId: string, payload: UpdateStudentDto): StudentResponseDto{
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map(student =>{
      if(student.id === studentId){
        updatedStudent = {
          id: studentId,
          ...payload
        }
        return updatedStudent
      } else return student
    });

    this.students = updatedStudentList;
    return updatedStudent; 
  }

  getStudentsByTeacherId(teacherId : string): FindStudentResponseDto[]{
    return this.students.filter(student => {
      return student.teacher === teacherId
    })
  }

  updateStudentTeacher(teacherId: string, studentId: string):StudentResponseDto{
    let updateStudent : StudentResponseDto;

    const updateStudentList = this.students.map(student => {
      if(student.id === studentId) {
        updateStudent = {
          ...student,
          teacher: teacherId 
        }
        return updateStudent
      } else return student; 
    });

    this.students = updateStudentList 
    return updateStudent; 
  }
}
