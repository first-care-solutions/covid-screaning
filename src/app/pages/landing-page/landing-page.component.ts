import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  defaultDate = '1987-06-30';
  isSubmitted = false;

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Please provide all the required values!',
    });
    toast.present();
    toast.onDidDismiss().then((val) => {
      console.log('Toast Dismissed');
    });
  }

  constructor(public formBuilder: FormBuilder, public toastCtrl: ToastController, public modalController: ModalController, private router: Router) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      initials: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      idType: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.minLength(9)]],
      dateOfBirth: [this.defaultDate],
      email: ['', [, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      cellNumber: ['', [Validators.required, Validators.minLength(9)]],
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
      this.router.navigate(['/pages/virtual-room']);
      return true;
    }

    this.ionicForm.reset();
  }

  /*
  async openModal() {

    // create the modal window
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { ticketholders: listProps },
    });
    // handle the return data when the modal window closes
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned.data !== 'Cancel') {
        this.dataReturned = `You selected transactionID ${dataReturned.data}`;
      }
      else {
        this.dataReturned = 'User cancelled the modal page.';
      }
    });

  async closeModal() {
    await this.modalController.dismiss('Cancel');
  }

  async resetModal() {
    await this.modalController.dismiss('Reset');
  }*/
}
