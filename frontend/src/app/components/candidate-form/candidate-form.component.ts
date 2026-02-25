import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CandidateService } from '../../services/candidate.service';
import { UI_TEXTS } from '../../models/candidate.constants';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {
  @Output() uploadSuccess = new EventEmitter<void>();

  candidateForm: FormGroup;
  selectedFile: File | null = null;
  readonly formTexts = UI_TEXTS.FORM;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private snackBar: MatSnackBar
  ) {
    this.candidateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.candidateForm.valid && this.selectedFile) {
      const { name, surname } = this.candidateForm.value;

      this.candidateService.upload(name, surname, this.selectedFile).subscribe({
        next: () => {
          this.snackBar.open(this.formTexts.SUCCESS_MSG, 'OK', { duration: 3000 });
          this.candidateForm.reset();
          this.selectedFile = null;
          this.uploadSuccess.emit();
        },
        error: (err) => {
          console.error('Upload failed:', err);
          this.snackBar.open(this.formTexts.ERROR_MSG, 'X', { duration: 5000 });
        }
      });
    }
  }
}
