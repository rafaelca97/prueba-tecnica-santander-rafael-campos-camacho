import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Candidate extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true })
  seniority: string;

  @Prop({ required: true })
  years: number;

  @Prop({ required: true })
  availability: boolean;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);