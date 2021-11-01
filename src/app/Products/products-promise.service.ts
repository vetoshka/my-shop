import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Subject } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {

  private productsUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  getProducts(): Promise<ProductModel[]> {
    const request$ = this.http.get(this.productsUrl);
    return firstValueFrom(request$)
      .then(response => response as ProductModel[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getProduct(id: number | string): Promise<ProductModel> {
    const url = `${this.productsUrl}/${id}`;
    const request$ = this.http.get(url);
    return firstValueFrom(request$)
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }
  updateProduct(task: ProductModel): Promise<ProductModel> {
    const url = `${this.productsUrl}/${task.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const request$ = this.http.put(url, task, options);
    return firstValueFrom(request$)
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }
  createProduct(task: ProductModel): Promise<ProductModel> {
    const url = this.productsUrl;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const request$ = this.http.post(url, task, options);
    return firstValueFrom(request$)
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }
  deleteProduct(task: ProductModel): Promise<unknown> {
    const url = `${this.productsUrl}/${task.id}`;
    const request$ = this.http.delete(url);
    return firstValueFrom(request$)
      // json-server return empty object
      // so we don't use .then(...)
      .catch(this.handleError);
  }
  private channel = new Subject<ProductModel>();
  channel$ = this.channel.asObservable();

  publishData(data: ProductModel): void {
    this.channel.next(data);
  }

}


