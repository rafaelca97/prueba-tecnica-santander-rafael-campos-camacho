import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CandidateService } from '../../services/candidate.service';
import { COLUMN_LABELS, CANDIDATE_TABLE_COLUMNS } from '../../models/candidate.constants';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  readonly displayedColumns = CANDIDATE_TABLE_COLUMNS;
  readonly labels = COLUMN_LABELS;

  candidates$: Observable<Candidate[]>;

  constructor(private candidateService: CandidateService) {
    this.candidates$ = this.candidateService.candidates$;
  }

  ngOnInit(): void {
    this.candidateService.loadAll();
  }
}
