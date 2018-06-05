import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatSelect, MatOption } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { Observable } from 'rxjs/Observable';
import { BarcodeService } from '../services/barcode.service';
import { Barcode } from '../shared/models/Barcode.model';



@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  private loading: boolean = false;
  barcodes: Barcode[];
  private JSObject: Object = Object;

  constructor(private http: HttpClient, private route: ActivatedRoute, private barcodeService: BarcodeService) { }

  company: string;
  //barcodes: any;
  //barcodes = [];
  selected = 'All';
  category = [];
  categorySet = new Set();


  private errorMessage: any = '';

  getBarcodes() {
    this.categorySet.add('All');

    this.route.params.subscribe(params =>
      this.company = params['company']
    )

    // this.http.get('fetchBarCodes?company='+this.company).subscribe(
    //   data =>  {
    //      alert(data);
    //      this.barcodes = data;
    //      console.log(this.barcodes);
    //      this.barcodes.forEach(element => { 
    //        console.log('Element is :'+element);
    //        console.log('Category is :'+element.productCategory);
    //        this.categorySet.add(element.productCategory);
    //      });

    //      this.category = Array.from(this.categorySet); 
    //      console.log('Category is '+this.category);

    // });

    // this.barcodes = this.barcodeService.getBarcodes(this.company);


    // this.barcodeService.getBarcodes(this.company).subscribe(data => {
    //   this.loading = false;
    //   this.barcodes = data 
    // });

    this.barcodeService.getBarcodes(this.company).subscribe(data => {
      this.loading = false;
      this.barcodes = data;
      console.log('Barcodes data is :' + this.barcodes);
      this.barcodes.forEach(element => {
        //console.log('index is :'+index);
        //console.log(element[0].productCategory);
        this.categorySet.add(element.productCategory);
      });
      this.category = Array.from(this.categorySet);
      this.barcodes = data;
      console.log('Category is ' + this.category);
    });


  }

  filterProducts(value) {
    alert(value.value);
  }

  ngOnInit(): void {
    this.getBarcodes();
  }



}
