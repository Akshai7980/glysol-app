import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private common: CommonService,
  ) { }

  ngOnInit() {
  }

  signin() {
    this.common.navCtrl.navigateForward(['/tabs/tab1']);
  }

}
