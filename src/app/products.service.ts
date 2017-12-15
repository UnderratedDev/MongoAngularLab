import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Product} from './product';

@Injectable()
export class ProductsService {

  private BASE_URL = "https://api.mlab.com/api/1/databases/angularlab/collections/Products?apiKey=LbBdCKxNTwPg4a259He-9eg0_wk66ZUk";   
  
    constructor(public _http: Http) { }
  
    products;
    getProducts(): Promise<Product[]> {
      return this._http.get(this.BASE_URL)
       .toPromise()
       .then(response => response.json() as Product[])
       .catch(this.handleError);
    }
   
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
