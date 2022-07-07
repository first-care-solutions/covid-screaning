import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
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

  ngOnInit() {
    console.log();
  }

  // {
  //   title: 'MR' | 'MRS' | 'MS' | 'MISS' | 'MASTER' | 'DR' | 'PROF' | 'REV' | 'DS' | null;
  //   initials: string;
  //   firstName: string;
  //   surname: string;
  //   idType: 0 | 1 | 2; //--- 0=RSA ID 1=Passport 2=DOB/Other
  //   idNumber: string;
  //   dateOfBirth: string; // Format must be 'YYYY-MM-DD'
  //   cellNumber: string;
  //   email?: string;
  // }
}
