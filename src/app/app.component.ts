import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'الصفحة الرئيسية',
      url: '/operation-date',
      icon: 'home-outline',
    },
    {
      title: 'لوحة قيادة العمليات',
      url: '/dashboard',
      icon: 'create-outline',
    },
    {
      title: 'لوحة قيادة الموظفين',
      url: '/users-dashboard',
      icon: 'person-outline',
    },
    {
      title: 'لوحة قيادة السائقين',
      url: '/drivers-dashboard',
      icon: 'car-outline',
    },
    {
      title: 'لوحة قيادة الموردين',
      url: '/suppliers-dashboard',
      icon: 'bag-handle-outline',
    },
  ];

  constructor() {

    // uncomment these lines when using ionic serve

    GoogleAuth.initialize({
      clientId: '1027814650922-52gtgrmqol1k1vo9pmcggiqrntsneajn.apps.googleusercontent.com',
      scopes: ['profile', 'email','https://www.googleapis.com/auth/spreadsheets'],
      grantOfflineAccess: true,
    });

  }



}
