import { ApiServiceService } from './../../api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',

  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  header = 'ConsultForm';

  /*string interpolation */
  getHeader() {
    return this.header;
  }

  userProfileForm = new FormGroup({
    title: new FormControl('', Validators.required),
    initial: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    identificationType: new FormControl([0, 1, Validators.required]),
    identificationNumber: new FormControl('', Validators.required),
    cellNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
  });

  onsubmit() {
    console.warn(this.userProfileForm.value);
    this._enrollmenService.enroll(this.userProfileForm.value).subscribe(
      (data) => alert('Success'),
      (error) => alert('Unfortunately we are not able to connect with the Telemedicine doctor at this time. Please try again later.')
    );
  }
  async _alert() {
    const alert = await this.alertController.create({
      header: 'Reset',
      message: 'Are you sure you wish to clear the information on the form?',
      backdropDismiss: false,

      buttons: [
        {
          text: 'Yes',
          role: 'reset',
          cssClass: 'my-alert-class',
          handler: (value: any) => {
            console.log('form reset');
            this.userProfileForm.reset();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'my-alert-class',
          handler: (value: any) => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    await alert.present();
  }
  constructor(
    private alertController: AlertController,
    private http: HttpClient,
    private _enrollmenService: ApiServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
}
