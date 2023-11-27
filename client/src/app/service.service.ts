import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './model/answer.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_HOST = 'https://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllAnswers(): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(this.API_HOST + '/');
  }

  addAnswer(data: Answer): Observable<Answer> {
    return this.httpClient.post<Answer>(
      this.API_HOST + '/questions',
      data,
    );
  }

  getQuestionById(id: string): Observable<Answer> {
    return this.httpClient.get<Answer>(`${this.API_HOST}//${id}`);
  }

}
