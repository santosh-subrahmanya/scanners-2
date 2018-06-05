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
  //cat = 'All';
  category = [];
  categorySet = new Set();
  filterByCategory: string = "All";



  private errorMessage: any = '';

  getBarcodes(cat) {
    this.categorySet.add('All');

    this.route.params.subscribe(params =>
      this.company = params['company']
    )

    this.barcodeService.getBarcodes(this.company, cat).subscribe(data => {
      this.loading = false;
      this.barcodes = data;
      console.log('Barcodes data is :' + this.barcodes);
      this.barcodes.forEach(element => {

        this.categorySet.add(element.productCategory);
      });
      this.category = Array.from(this.categorySet);
      this.barcodes = data;
      console.log('Category is ' + this.category);
    });


  }

  filterProducts(category) {
    this.getBarcodes(category.value);
  }

  ngOnInit(): void {
    this.getBarcodes('All');
  }



}
