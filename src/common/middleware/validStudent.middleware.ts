import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; 
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction){
    console.log(`this middleware was called`);
    const studentId = req.params.studentId; 
    //some returns true or false
    const studentExists = students.some(student => {
      return student.id === studentId
    });
    if(!studentExists){
      throw new HttpException("Student not found", 400);
    }
    next(); 
  }
}