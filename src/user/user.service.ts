import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<Users> {
    const userData: Users = new Users();
    userData.firstName = createUserDto.firstName;
    userData.lastName = createUserDto.lastName;
    userData.age = createUserDto.age;

    return this.userRepository.save(userData);
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(id) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userData: Users = new Users();
    userData.firstName = updateUserDto.firstName;
    userData.lastName = updateUserDto.lastName;
    userData.age = updateUserDto.age;
    return this.userRepository.save(userData);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
