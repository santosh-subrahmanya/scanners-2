import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  company : any;
  barcodes : any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
     //alert('In ng init');
     this.http.get('/company').subscribe(
      data =>  {
        //alert(data);
         this.company = data;
         //alert(this.company.imageUrl);
    });
  }

  showAllBarcodes(company) {
    alert(company);
    //this.router.navigateByUrl(['/barcode', {"company":company}]);
    this.router.navigateByUrl('/barcode;company=Walmart');
  }

}