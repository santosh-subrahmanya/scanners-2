import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { LightboxModule, Lightbox, LightboxConfig } from 'angular2-lightbox'; 
import { MatSelect, MatOption } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) { }
  company : string;
  barcodes : any;

  category = [];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  ngOnInit() {
    let category = new Set();

    this.route.params.subscribe( params =>
      this.company = params['company']
    )
  
    this.http.get('fetchBarCodes?company='+this.company).subscribe(
      data =>  {
        //alert(data);
         this.barcodes = data;
         console.log(this.barcodes);
         this.barcodes.forEach(element => { 
           console.log(element.productCategory);
           category.add(element.productCategory);
         });

         //alert(category.values); 
    });
  }

  // OpenImageModel(imageSrc, images) {
  //   //alert('OpenImages');
  //   var imageModalPointer;
  //   for (var i = 0; i < images.length; i++) {
  //          if (imageSrc === images[i].img) {
  //            imageModalPointer = i;
  //            console.log('jhhl',i);
  //            break;
  //          }
  //     }
  //   this.openModalWindow = true;
  //   this.images = images;
  //   this.imagePointer  = imageModalPointer;
  // }

  // cancelImageModel() {
  //   this.openModalWindow = false;
  // }

  // open(index: number) {
  //   // override the default config on second parameter
  //   this._lightbox.open(this._albums, index, { wrapAround: true, showImageNumberLabel: true });
  // }
  // onMouseOver() {
    
  // }

}
