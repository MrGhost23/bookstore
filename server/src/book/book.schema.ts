import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  author: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: Boolean, default: false })
  feature: boolean;

  @Prop({ type: Number, default: 0, min: 0, max: 5 })
  rating: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);