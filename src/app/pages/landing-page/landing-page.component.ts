import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '@services/api.service';
import { ActivatedRoute } from '@angular/router';

// Local imports
import { Patient } from 'src/app/model/patient.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  ionicForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  patients: Patient[];

  // to hold users data coming from public api
  usersData$: Object;
  // to hold posts data coming from public api
  postsData$: Object;

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.ionicForm = this.formBuilder.group({
      title: [''],
      initials: [''],
      firstName: [''],
      surname: [''],
      idType: [''],
      idNumber: [''],
      dateOfBirth: [''],
      email: [''],
      cellNumber: [''],
    });

    this._activatedRoute.params.subscribe((_params) => {
      this.ionicForm = _params.title;
      console.log('this.user$ : ' + this.ionicForm.value.title$);
      console.log('params : ', _params);
    });
  }

  titles: string[] = ['MR', 'MRS', 'MISS', 'MASTER', 'DR', 'PROF', 'REV', 'DS'];

  idTypes: string[] = ['RSAID', 'Passport', 'DOB/Other'];

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      initials: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      idType: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.minLength(13)]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.pattern(this.emailPattern)]],
      cellNumber: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.apiService.getAll().subscribe((data) => (this.patients = data));
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

      var formData: any = new FormData();
      formData.append('title', this.ionicForm.value.title);
      formData.append('initials', this.ionicForm.value.initials);
      formData.append('firstName', this.ionicForm.value.firstName);
      formData.append('surname', this.ionicForm.value.surname);
      formData.append('idType', this.ionicForm.value.idType);
      formData.append('idNumber', this.ionicForm.value.idNumber);
      formData.append('dateOfBirth', this.ionicForm.value.dateOfBirth);
      formData.append('email', this.ionicForm.value.email);
      formData.append('cellNumber', this.ionicForm.value.cellNumber);

      this.apiService.create(formData);

      return this.router.navigate(['/pages/virtual-room']);
    }
  }

  async ResetPopup() {
    const alert = await this.alertController.create({
      header: 'Reset Popup!',
      message: '<strong>Are you sure you wish to clear the information on the form?</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return this.ionicForm.reset();
          },
        },
        {
          text: 'Yes',
          handler: () => {
            return this.ionicForm.reset();
          },
        },
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
