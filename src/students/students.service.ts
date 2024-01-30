import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

// It tells NestJS that it is a service and an injectable
@Injectable()
export class StudentsService {
  // Inject student repository
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  // create a new student
  create(createStudentDto: CreateStudentDto) {
    const student = new Student();
    student.firstName = createStudentDto.firstName;
    student.lastName = createStudentDto.lastName;
    student.email = createStudentDto.email;
    student.address = createStudentDto.address;
    return this.studentRepository.save(student);
  }

  // fetch all students
  findAll() {
    return this.studentRepository.find();
  }

  // get student by id
  findOne(id: number) {
    return this.studentRepository.findOneBy({ id });
  }

  // update student data by id
  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const studentById = await this.studentRepository.findOneBy({ id });
    studentById.firstName = updateStudentDto.firstName;
    studentById.lastName = updateStudentDto.lastName;
    studentById.email = updateStudentDto.email;
    studentById.address = updateStudentDto.address;
    return this.studentRepository.save(studentById);
  }

  // detete student by id
  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
