import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserDataI } from '../pages/landing-page/landing-page.component';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface APIResponseI {
  result: boolean;
  data: any;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://127.0.0.1:3000/api/health/booking/greenlineTest';
  constructor(private http: HttpClient) {}

  saveData(data: UserDataI): Observable<APIResponseI> {
    return this.http.post<APIResponseI>(this.url, data).pipe(catchError((err) => of(err.error)));
  }
}
