import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { StudentModule } from 'src/student/student.module';

@Module({
    imports: [StudentModule],
    controllers: [TeacherController, StudentTeacherController],
    providers: [TeacherService]
})
export class TeacherModule {}
