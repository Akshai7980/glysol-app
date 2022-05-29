import { Injectable } from '@angular/core';

import { ToastController, LoadingController, AlertController, ModalController, Platform, NavController, PopoverController } from '@ionic/angular';
// import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AjaxService } from './ajax.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
              public router: Router,
              public modalController: ModalController,
              public platform: Platform,
              // public http: HttpClient,
              public ajx:AjaxService,
              public storage: Storage,
              public alertCtrl: AlertController,
              public toastController: ToastController,
              public loadingController: LoadingController,
              public popoverController: PopoverController,
              public splashScreen: SplashScreen,
              public statusBar: StatusBar,
              public navCtrl: NavController,
              public route: ActivatedRoute,
  ) {
    console.log('Hello Common Service Provider');
   }

   setStorage(key: string, value: any) {
    this.storage.set(key, value);
  }

  async getStorage(key: string) {
    await this.storage.get(key).then((val) => {
      console.log('Value From Storage:', val);
      return val;
    });
  }
  
  clearStorage() {
    this.storage.clear();
  }
}
