import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) { }
  company : string;
  barcodes : any;

  ngOnInit() {

    alert('In ng init method...');
    this.route.params.subscribe( params =>
      this.company = params['company']
    )
  
    this.http.get('/fetchBarCodes'+this.company).subscribe(
      data =>  {
        //alert(data);
         this.barcodes = data;
         alert(this.barcodes);
    });
  }

}
