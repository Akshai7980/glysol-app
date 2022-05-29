import { Component } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    effect: 'flip',
    autoplay: {
      delay: 3000
    }
  };

  ProductDetails = [
    {
      product_id : '01',
      title : 'Product Name',
      image : '../../assets/images/1593619399-317enYtzBkL.jpg',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '02',
      title : 'Product Name',
      image : '../../assets/images/argan-400x500.png',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '03',
      title : 'Product Name',
      image : '../../assets/images/dry-skin-lotion-1571666574.png',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '04',
      title : 'Product Name',
      image : '../../assets/images/e5cb1d38b0f1ae18aec38aaf60a0e240.jpg',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '05',
      title : 'Product Name',
      image : '../../assets/images/herbal-moisturizing-lotion-200ml-1.jpg',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '06',
      title : 'Product Name',
      image : '../../assets/images/mineralbodylotion_2.png',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '07',
      title : 'Product Name',
      image : '../../assets/images/NIVEA-Body-Care-Beiersdorf.png',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
    {
      product_id : '08',
      title : 'Product Name',
      image : '../../assets/images/herbal-moisturizing-lotion-200ml-1.jpg',
      product_details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      color : 'Blue , Green , Red',
      description : 'Hand Wash',
      quantity : '250ml',
      rating : '4.5 🌟',
      rate : '$100',
    },
  ]

  constructor(
    private common: CommonService,
  ) {}

  ionViewWillEnter(){
    console.log('Entered Into Tab 1 Page');
    console.log('ProductDetails:',this.ProductDetails);

    this.slideOpts = {
      effect: 'flip',
      autoplay: {
        delay: 2000
      }
    };

  }

  gotoProductDetails(e,p) {
    console.log('Product:',p);
    this.common.navCtrl.navigateForward(['/product-details'], {queryParams: p});
  }

}
