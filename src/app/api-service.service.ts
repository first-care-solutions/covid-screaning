import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@ionic/cli';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  _url = '/api/health/booking/greenlineTest';

  enroll(user: User) {
    return this._http.post<any>(this._url, user);
  }

  constructor(private _http: HttpClient) {}
}
