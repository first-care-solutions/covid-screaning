import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit {
  ionicForm!: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: [],
      initial:['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      idType:[],
      dob: [this.defaultDate],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],  
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  getDate(event) {
    let date = new Date(event.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob')?.setValue('...')
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      return true;
    }
  }

}
