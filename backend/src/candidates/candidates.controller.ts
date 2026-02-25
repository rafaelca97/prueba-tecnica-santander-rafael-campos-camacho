import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CandidatesService } from './candidates.service';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

    @Post()
    create(@Body() candidateData: any) {
    return this.candidatesService.create(candidateData);
    }

    @Post('upload') 
        @UseInterceptors(FileInterceptor('file'))
        async uploadCandidate(
        @UploadedFile() file: Express.Multer.File,
        @Body('name') name: string,
        @Body('surname') surname: string,
        ) {
        return this.candidatesService.processExcelAndSave(file, name, surname);
    }

    @Get(':id')
        findOne(@Param('id') id: string) {
        return this.candidatesService.findOne(id);
    }

    @Get()
        findAll() {
        return this.candidatesService.findAll();
    }
}