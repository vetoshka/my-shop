import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || (req.method === 'PUT')) {
      console.log('req.method:', req.method);
      var start = performance.now();
      return next
        .handle(req)
        .pipe(res => {
          console.log('took ' + (performance.now() - start) + 'ms');
          return res;
        })} else {
      return next.handle(req);
    }

  }
}