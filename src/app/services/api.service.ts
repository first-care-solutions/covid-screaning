import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataI } from '../pages/landing-page/landing-page.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://127.0.0.1:3000/api/health/booking/greenlineTest';
  constructor(private http: HttpClient) {}

  saveData(data: UserDataI) {
    return this.http.post(this.url, data);
  }
}
