import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/Http";
import { Observable } from "rxjs/Observable";
import { Store } from "../shared/models/store.model";

@Injectable()
export class CompanyService {

    constructor(private http: Http) { }

    getAllStores() :  Observable<Store[]>{
        let apiURL = '/companyDetails';

        return this.http
                .get(apiURL)
                .map((response: Response) => {
                    return <Store[]>response.json();
                })
                .catch(this.handleError);
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