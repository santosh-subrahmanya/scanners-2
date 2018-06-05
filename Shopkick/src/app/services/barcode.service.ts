import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Barcode } from '../shared/models/Barcode.model';
import { Response, HttpModule, Http } from '@angular/Http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'util';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BarcodeService {

  constructor(private http: Http) { }

  getBarcodes(company, category) : Observable<Barcode[]> {

    let apiURL = '/fetchBarCodes?company='+company+'&category='+category;

    return this.http
             .get(apiURL)
             .map((response: Response) => {
                 return <Barcode[]>response.json();
             })
             .catch(this.handleError);
    // return this.http.get(apiURL).map(res => { 
    //   return res.json().results.map(item => { 
    //     return new Barcode( 
    //         item._id,
    //         item.productCategory,
    //         item.productName,
    //         item.productDescription,
    //         item.productImageUrl,
    //         item.barcodeImageUrl,
    //         item.company
    //     );
    //   });
    // });
  }

  private extractData(res : Response) {
    const body: any = res.json();
    return body || [];
  }

  private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}

}
