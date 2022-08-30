import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',

  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  header = 'ConsultForm';
  initials = 'Instials:';
  titles = 'Mr';

  getTitle() {
    return this.titles;
  }

  /*string interpolation */
  getHeader() {
    return this.header;
  }

  constructor() {}

  ngOnInit() {}
}
