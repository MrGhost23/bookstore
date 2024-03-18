import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: User, required: true })
  user: User;

  @Prop([{ bookId: String, quantity: Number }])
  items: Array<{ bookId: string, quantity: number }>;
}

export const CartSchema = SchemaFactory.createForClass(Cart);