import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Candidate } from './candidates.schema';
import * as XLSX from 'xlsx';


@Injectable()
export class CandidatesService {
  constructor(
    
    @InjectModel(Candidate.name) private candidateModel: Model<Candidate>,
    ) {}

    async create(data: any): Promise<Candidate> {
        const newCandidate = new this.candidateModel(data);
        return newCandidate.save();
    }

    async processExcelAndSave(file: Express.Multer.File, name: string, surname: string) {
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const excelData: any[] = XLSX.utils.sheet_to_json(worksheet);
        const firstRow = excelData[0];

        const finalData = {
            name,
            surname,
            seniority: firstRow.seniority || 'junior',
            years: Number(firstRow.years) || 0,
            availability: String(firstRow.availability).toLowerCase() === 'true'
        };

        const newCandidate = new this.candidateModel(finalData);
        return newCandidate.save();
    }

    async findAll(): Promise<Candidate[]> {
        return this.candidateModel.find().exec();
    }

    async findOne(id: string): Promise<Candidate> {
        const candidate = await this.candidateModel.findById(id).exec();
        
        if (!candidate) {
            throw new NotFoundException(`Candidate with ID ${id} not found`);
        }
        
        return candidate;
    }
}