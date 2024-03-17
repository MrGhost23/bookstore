import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartItem = {
  bookId: string;
  quantity: number;
};

@Schema()
export class User extends Document {
  @Prop()
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop({ default: [] })
  wishlist: string[];

  @Prop({ default: [] })
  cart: CartItem[];

  @Prop({ default: [] })
  orders: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);