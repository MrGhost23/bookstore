import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { isEmail } from 'class-validator';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().select('-password').exec();
      }

      async findOne(identifier: string): Promise<User | undefined> {
        if (isEmail(identifier)) {
          return this.userModel.findOne({ email: identifier }).select('-password');
        } else {
          return this.userModel.findById(identifier).select('-password');
        }
      }

    async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).select('-password').exec();
    }
    
    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).select('-password').exec();
    }
}
