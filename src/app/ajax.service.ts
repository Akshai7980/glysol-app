import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor } from '@capacitor/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    // public http: HttpClient,
    private router: Router,
  ) { 
    console.log('Hello AjaxService Provider');
  }
}
