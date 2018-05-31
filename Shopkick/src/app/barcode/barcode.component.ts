import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
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
  selected = 'All';
  category = [];
  categorySet = new Set();

  ngOnInit() {
    this.categorySet.add('All');

    this.route.params.subscribe( params =>
      this.company = params['company']
    )
  
    this.http.get('fetchBarCodes?company='+this.company).subscribe(
      data =>  {
        
         this.barcodes = data;
         console.log(this.barcodes);
         this.barcodes.forEach(element => { 
           console.log(element.productCategory);
           this.categorySet.add(element.productCategory);
         });
         
         this.category = Array.from(this.categorySet); 
         console.log('Category is '+this.category);

    });
  }

  filterProducts(category) {
    //alert(category.value);
    this.categorySet = new Set();
    this.barcodes.forEach(element => { 
      console.log(element.productCategory);
      if(element.productCategory != category.value) {
        //this.categorySet.add(element.productCategory);
        this.barcodes.delete(element);
      }
    });
    
    this.category = Array.from(this.categorySet); 
    console.log('Category is '+this.category);

  }

}
