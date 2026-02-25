import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CandidatesService } from './candidates/candidates.service';
import { Candidate, CandidateSchema } from './candidates/candidates.schema';
import { CandidatesController } from './candidates/candidates.controller';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    MongooseModule.forFeature([{ name: Candidate.name, schema: CandidateSchema }])
  ],
  controllers: [AppController, CandidatesController],
  providers: [AppService, CandidatesService],
})
export class AppModule {}
