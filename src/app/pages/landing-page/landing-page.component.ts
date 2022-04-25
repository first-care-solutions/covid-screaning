import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  ionicForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(public formBuilder: FormBuilder, public toastCtrl: ToastController, public modalController: ModalController, private router: Router) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      initials: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      idType: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.minLength(13)]],
      dateOfBirth: [Validators.required],
      email: ['', [Validators.pattern(this.emailPattern)]],
      cellNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.ionicForm.controls;
  }

  submitForm() {
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      this.router.navigate(['/pages/virtual-room']);
      return true;
    }
  }
}
