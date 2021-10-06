import { Injectable } from '@angular/core';
import { generateNewId } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {


  constructor() { }
  generate(n: number): string {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < n; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  getNewID():number{
    return generateNewId().next().value!;
  }
}
