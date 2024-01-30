import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';

import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  // inject studentsService provider
  constructor(private readonly studentsService: StudentsService) {}

  // create a new student
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  // get all students
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  // get student by id param
  // we used ParseIntPipe to convert id to numeric type
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const student = this.studentsService.findOne(id);

    if (!student) {
      throw new NotFoundException('Student does not exist!');
    }

    return student;
  }

  // update student by id
  // we used ParseIntPipe to convert id to numeric type
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(id, updateStudentDto);
  }

  // delete student by id
  // we used ParseIntPipe to convert id to numeric type
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.remove(id);
  }
}
