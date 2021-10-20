import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { UserModel, UserRole } from 'src/app/models/user.model';
import { UserArrayService } from 'src/app/users/user-array.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isAdmin = false;
   constructor(private userArrayService:UserArrayService){

   }
  login(username: string): Observable<UserModel> {
    let currentUser =  this.userArrayService.getUser(username);
    return currentUser.pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = !!currentUser;
        this.isAdmin = val?.role === UserRole.Admin;;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}
