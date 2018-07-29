import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Rx';


import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {
    _baseURL: string = '/fileupload/'
    constructor(private http: HttpClient) { }

    // upload(files, parameters){
    //     //let headers = new Headers();
    //     // let options = new RequestOptions();
    //     // options.params = parameters;
    //     return  this.http.post(this._baseURL + 'upload', files, parameters)
    //              .map(response => response)
    //              .catch(error => Observable.throw(error));
    // }
    // getImages(){
    //     return this.http.get(this._baseURL + "getimages")
    //                .map(response => response)
    //                .catch(error => Observable.throw(error));
    // }
}