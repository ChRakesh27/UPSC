import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './model/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_HOST = 'https://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllToppers(): Observable<any> {
    return this.httpClient.get<any>(this.API_HOST + "/toppers")
  }



}
