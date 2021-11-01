import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, share, catchError, concatMap, throwError, map, finalize } from 'rxjs';
import { shopLocalStorage } from '../core/services/local-storage.service';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  constructor(
    private http: HttpClient,
  ) { 
    this.getCartProducts().subscribe(p=>{
      this.totalQuantity = p.reduce((sum, x) => sum + x.quantity, 0);
      this.totalSum = p.reduce((sum, x) => sum + x.price * x.quantity, 0);
    })
  }
  private cartsUrl = 'http://localhost:3000/carts';

  totalQuantity: number = 0;
  totalSum: number = 0;
  isEmpty: boolean = true;
  getCartProducts(): Observable<CartModel[]> {

    return this.http.get<CartModel[]>(this.cartsUrl).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }
  getCartProduct(id: number | string): Observable<CartModel> {
    console.log("ds")
    const url = `${this.cartsUrl}/${id}`;
    return this.http.get<CartModel>(url)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }
  updateCart(cart: CartModel): Observable<CartModel> {
    const url = `${this.cartsUrl}/${cart.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<CartModel>(url, cart, options)
      .pipe(catchError(this.handleError));
  }
  createCart(product: CartModel): Observable<CartModel> {
    const url = this.cartsUrl;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post<CartModel>(url, product, options)
      .pipe(
        finalize(()=> {
          this.totalQuantity += product.quantity;
          this.totalSum += product.quantity*product.price;
        }),
        catchError(this.handleError)
      );
  }
  deleteCart(cart: CartModel): Observable<CartModel[]> {
    const url = `${this.cartsUrl}/${cart.id}`;
    return this.http.delete(url).pipe(
      concatMap(() => this.getCartProducts()),
      finalize(()=> {
        this.totalQuantity -= cart.quantity;
        this.totalSum -= cart.quantity*cart.price;
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
 
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  increaseQuantity(product: CartModel, quantity: number = 1): void {
    this.changeQuantity(product, quantity)
  }

  decreaseQuantity(product: CartModel, quantity: number = 1): void {
    this.changeQuantity(product, -quantity)
  }
  isEmptyCart(): boolean {
    this.getCartProducts().subscribe(x =>this.isEmpty = !x.length);
    return !!length;
  }
  private changeQuantity(product: CartModel, quantity: number): void {
    console.log("dddd")
    product =
    {
      ...product,
      quantity: product.quantity + quantity
    }
    this.updateCart(product).subscribe(() => {
      console.log(this.totalQuantity);
      this.totalQuantity += quantity;
      this.totalSum += quantity*product.price;
    })
  }
}
