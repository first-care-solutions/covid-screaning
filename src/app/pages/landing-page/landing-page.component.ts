import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface UserDataI {
  title: string;
  initials: string;
  firstName: string;
  surname: string;
  idType: number;
  idNumber: string;
  dateOfBirth: string;
  cellNumber: string;
  email?: string;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  userInfoForm = this.formBuilder.group({
    title: ['', Validators.required],
    initials: ['', Validators.required],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', Validators.required],
    idType: [null, Validators.required],
    idNumber: ['', [Validators.required, Validators.minLength(6)]],
    dateOfBirth: ['', Validators.required],
    cellNumber: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', Validators.email],
  });

  minDate = '1950-01-01';
  maxDate = '2010-12-31';

  constructor(private formBuilder: FormBuilder) {}

  userInfoSubmit() {
    const userData: UserDataI = {
      title: this.userInfoForm.value.title,
      initials: this.userInfoForm.value.initials,
      firstName: this.userInfoForm.value.firstName,
      surname: this.userInfoForm.value.surname,
      idType: this.userInfoForm.value.idType,
      idNumber: this.userInfoForm.value.idNumber,
      dateOfBirth: this.userInfoForm.value.dateOfBirth,
      cellNumber: this.userInfoForm.value.cellNumber,
      email: this.userInfoForm.value.email,
    };
    console.log(userData);
  }
}
