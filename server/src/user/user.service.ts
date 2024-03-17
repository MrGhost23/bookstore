import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    }
    
    async findOne(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email });
      }
}
