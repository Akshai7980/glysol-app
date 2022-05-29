import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  ProductInfo: any = [];

  constructor(
    private common: CommonService,
  ) { 

    this.common.route.queryParams.subscribe(resp => {
      this.ProductInfo = resp;
      console.log('ProductInfo:',this.ProductInfo);
  });

  }

  ngOnInit() {
  }

  AddToBag (e,p) {
    console.log('Add To Bag Button clicked');
    this.common.navCtrl.navigateForward(['/tabs/tab2'] , {queryParams: p});
  }

  ToBuyNow (e,p) {
    console.log('Buy Now Button clicked');
    this.common.navCtrl.navigateForward(['/tabs/tab2'] , {queryParams: p});
  }

}
