import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Purchase',
      url: '/purchase',
      icon: 'add-circle'
    },
    {
      title: 'Sales',
      url: '/sale',
      icon: 'cart',
    },
    {
      title: 'Inventory',
      url: 'inventory',
      icon: 'filing'
    },
    {
      title: 'Reports',
      icon: 'podium',
      children: [
        {
          title: 'LC Register',
          url: '/a',
          icon: 'home'
        },
        {
          title: 'Vendor Wise LC Register',
          url: '/a',
          icon: 'list'
        },
        {
          title: 'LC Wise Purchase',
          url: '/a',
          icon: 'home'
        },
        {
          title: 'LC Wise Sales',
          url: '/a',
          icon: 'list'
        },
      ]
    },
    {
      title: 'Accounting',
      icon: 'pie'
    },
    {
      title: 'BRTA Related',
      url: '/brta',
      icon: 'home'
    },
    {
      title: 'Payroll',
      url: '/payroll',
      icon: 'list'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'logo-ionic'
    }
  ];




  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
