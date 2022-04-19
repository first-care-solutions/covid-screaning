import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  ionicForm!: FormGroup;
  defaultDate = '1987-06-30';
  isSubmitted = false;
  validations_form: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      initials: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      idType: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.minLength(5)]],
      dateOfBirth: [this.defaultDate],
      email: ['', [, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      cellNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  getDate(event) {
    let date = new Date(event.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob')?.setValue('...');
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      return true;
      this.router.navigate(['/pages/virtual-room']);
    }
  }
}
