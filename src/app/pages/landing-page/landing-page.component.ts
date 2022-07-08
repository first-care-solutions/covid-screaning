import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import dayjs from 'dayjs';

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

  minDate = dayjs().subtract(70, 'year').format('YYYY-MM-DD');
  maxDate = dayjs().format('YYYY-MM-DD');

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {}

  userInfoSubmit() {}

  async showAlert() {
    await this.alertController
      .create({
        header: 'Warning',
        message: 'Are you sure you wish to clear the information on the form?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.userInfoForm.reset();
            },
          },
          {
            text: 'Cancel',
          },
        ],
      })
      .then((res) => res.present());
  }
}
