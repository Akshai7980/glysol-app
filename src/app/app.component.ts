import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public selectedIndex = 0;
  
  public appPages = [

    {
      title: 'Glysol',
      // // url: '/',
      // img: '../../assets/icon/menu/imatch.png'
    },
    {
      title: 'Saved',
      // // url: '/',
      // img: '../../assets/icon/menu/save.png'
    },
    {
      title: 'Activities',
      // // url: '/',
      // img: '../../assets/icon/menu/activities.png'
    },
    {
      title: 'Messages',
      // url: '/chat',
      // img: '../../assets/icon/menu/messages.png'
    },
    {
      title: 'About Us',
      // url: '/tabs/tab8/about-us',
      // img: '../../assets/icon/menu/about.png'
    },
    {
      title: 'Help',
      // url: '/tabs/tab8/help',
      // img: '../../assets/icon/menu/help.png'
    },
    {
      title: 'FAQ',
      // url: '/tabs/tab8/faq',
      // img: '../../assets/icon/menu/faq.png'
    },
    {
      title: 'Privacy Policy',
      // url: '/tabs/tab8/privacy-policy',
      // img: '../../assets/icon/menu/privacy.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private common: CommonService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.common.navCtrl.navigateRoot(['/signup']);
  }
}
