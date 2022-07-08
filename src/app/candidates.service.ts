import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private baseUrl = 'http://localhost:8092/Fahadpolaap/candidates';

  constructor(private http: HttpClient) { }

  getCandidates(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCandidates(candidates: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidates);
  }

  updateCandidate(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCandidates(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCandidatesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
