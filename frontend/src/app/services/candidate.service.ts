import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://localhost:3000/candidates';

  private candidatesSubject = new BehaviorSubject<Candidate[]>([]);

  candidates$ = this.candidatesSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadAll(): void {
    this.http.get<Candidate[]>(this.apiUrl).subscribe(data => {
      this.candidatesSubject.next(data);
    });
  }

  upload(name: string, surname: string, file: File): Observable<Candidate> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('file', file);

    return this.http.post<Candidate>(`${this.apiUrl}/upload`, formData).pipe(
      tap(newCandidate => {
        const currentCandidates = this.candidatesSubject.getValue();
        this.candidatesSubject.next([...currentCandidates, newCandidate]);
      })
    );
  }

  getById(id: string): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.apiUrl}/${id}`);
  }

}
