import { Module } from '@nestjs/common';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { StudentController } from "../student/student.controller";
import { TeacherController } from "../teacher/teacher.controller";
import { StudentService } from '../student/student.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService]
})
export class AppModule {}
