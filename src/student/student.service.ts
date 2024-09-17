import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private StudentRepository: Repository<Student>,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const { name, message } = createStudentDto;
    const newStudent = this.StudentRepository.create({
      name,
      message,
    });
    await this.StudentRepository.save(newStudent);
    return newStudent;
  }

  async findAll() {
    const newStudent = await this.StudentRepository.find();
    return newStudent;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const { name, message } = updateStudentDto;

    if (!name || !message) {
      throw new BadRequestException('name or message required');
    }

    const updatedStudent = await this.StudentRepository.update(id, {
      name,
      message,
    });

    return updatedStudent;
  }

  async remove(id: number) {
    const result = await this.StudentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('deleted failed');
    }
    return result;
  }
}
