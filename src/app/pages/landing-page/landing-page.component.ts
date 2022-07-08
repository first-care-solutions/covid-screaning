import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from '@services/api.service';
import { Router } from '@angular/router';
import dayjs from 'dayjs';

export interface UserDataI {
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
    title: [null, Validators.required],
    initials: [null, Validators.required],
    firstName: [null, [Validators.required, Validators.minLength(2)]],
    surname: [null, Validators.required],
    idType: [null, Validators.required],
    idNumber: [null, [Validators.required, Validators.minLength(6)]],
    dateOfBirth: [null, Validators.required],
    cellNumber: [null, [Validators.required, Validators.minLength(10)]],
    email: [null, Validators.email],
  });

  minDate = dayjs().subtract(70, 'year').format('YYYY-MM-DD');
  maxDate = dayjs().format('YYYY-MM-DD');

  constructor(private formBuilder: FormBuilder, private alertController: AlertController, private apiService: ApiService, private router: Router) {}

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

  async showErrorAlert() {
    await this.alertController
      .create({
        header: 'Sorry',
        message: 'Unfortunately we are not able to connect with the Telemedicine doctor at this time. Please try again later.',
      })
      .then((res) => res.present());
  }

  submitData() {
    this.apiService
      .saveData({
        title: this.userInfoForm.value.title,
        initials: this.userInfoForm.value.initials,
        firstName: this.userInfoForm.value.firstName,
        surname: this.userInfoForm.value.surname,
        idType: +this.userInfoForm.value.idType,
        idNumber: this.userInfoForm.value.idNumber,
        dateOfBirth: this.userInfoForm.value.dateOfBirth,
        cellNumber: this.userInfoForm.value.cellNumber,
        email: this.userInfoForm.value.email,
      })
      .subscribe((feedback) => {
        if (!feedback.result) {
          this.showErrorAlert();
        } else {
          this.userInfoForm.reset();
          this.router.navigate(['pages/virtual-room']);
        }
      });
  }
}
