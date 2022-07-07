import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  userInfoForm = this.formBuilder.group({
    title: ['', Validators.required],
    initials: ['', Validators.required],
    firstName: ['', Validators.required],
    surname: ['', Validators.required],
    idType: ['', Validators.required],
    idNumber: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    cellNumber: ['', Validators.required],
    email: ['', Validators.email],
  });

  constructor(private formBuilder: FormBuilder) {}

  userInfoSubmit() {
    console.log(this.userInfoForm.value);
  }
}
