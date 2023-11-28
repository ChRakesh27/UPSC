import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_HOST = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllToppers(): Observable<any> {

    return this.httpClient.get<any>(this.API_HOST + "/toppers")
  }


  getAllTopics(): Observable<any> {
    return this.httpClient.get<any>(this.API_HOST + "/topics")
  }

  getTopicsWrittenByTopper(id: String): Observable<any> {
    return this.httpClient.get<any>(`${this.API_HOST}/topics?id=${id}`)
  }

  getTopicById(id: String): Observable<any> {
    return this.httpClient.get<any>(`${this.API_HOST}/topics/${id}`)
  }

}
