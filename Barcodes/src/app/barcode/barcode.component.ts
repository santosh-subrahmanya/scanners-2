import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LightboxModule, Lightbox, LightboxConfig } from 'angular2-lightbox';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute, private _lighboxConfig: LightboxConfig, private _lightbox: Lightbox) { }
  company : string;
  barcodes : any;

  openModalWindow:boolean=false;
  imagePointer:number;
  images = [];
  private _albums = [];
  private _album = [];

  ngOnInit() {
    this.route.params.subscribe( params =>
      this.company = params['company']
    )
  
    this.http.get('fetchBarCodes?company='+this.company).subscribe(
      data =>  {
        //alert(data);
         this.barcodes = data;
         console.log(this.barcodes);

         for(let i=0; i<this.barcodes.length; i++) {  
            const src = i+this.barcodes[i].barcodeImageUrl;
            const caption = i+this.barcodes[i].barcodeImageUrl;
            const thumb = this.barcodes[i].barcodeImageUrl;
            const album = {
              src: src,
              caption: caption,
              thumb: thumb
            };
  
            this._albums.push(album);
         }
    });
  }

  OpenImageModel(imageSrc, images) {
    //alert('OpenImages');
    var imageModalPointer;
    for (var i = 0; i < images.length; i++) {
           if (imageSrc === images[i].img) {
             imageModalPointer = i;
             console.log('jhhl',i);
             break;
           }
      }
    this.openModalWindow = true;
    this.images = images;
    this.imagePointer  = imageModalPointer;
  }

  cancelImageModel() {
    this.openModalWindow = false;
  }

  open(index: number) {
    // override the default config on second parameter
    this._lightbox.open(this._albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

}
