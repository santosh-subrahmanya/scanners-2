import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BarcodeService } from '../services/barcode.service';
import { CompanyService } from '../services/company.service';
// import {
//   Ng4FilesStatus,
//   Ng4FilesSelected
// } from './ng4-files';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  private loading: boolean = false;
  public selectedFiles;
  company : any

  constructor(private http: HttpClient, private route: ActivatedRoute, 
    private companyService: CompanyService) { }

  ngOnInit() {
    //alert('About to navigate to file upload');
    // Get all the stores and barcodes details
    //this.router.navigate(['file-upload']);
    this.companyService.getAllStores().subscribe(data => {
      this.loading = false;
      this.company = data;
      
    });;
    console.log('Company list is :'+this.company);
  }
}


