import { Patient } from './../model/patient.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';
  private patientUrl = 'http://localhost:8000/api/patients';

  constructor(private http: HttpClient) {}

  create(formData) {
    return this.http.post<any>(this.patientUrl, formData).subscribe({
      next: (response) => console.log(response),
      error: (error) =>
        console.error('Unfortunately we are not able to connect with the Telemedicine doctor at this time. Please try again later. ', error),
    });
  }

  getAll(): Observable<Patient[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
