import { Injectable } from '@angular/core';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { UserModel, UserRole } from '../models/user.model';
const userList: Array<UserModel> = [
  new UserModel(1, 'User1', '',  UserRole.User ),
  new UserModel(1, 'User2', '',  UserRole.Admin ),
];
const userListObservable: Observable<Array<UserModel>> = of(userList);
@Injectable({
  providedIn: 'root'
})
export class UserArrayService {

  users$: Observable<UserModel[]> = userListObservable;
  getUser(name: string): Observable<UserModel> {
    return this.users$
      .pipe(
        switchMap((users: Array<UserModel>) => {
          const user = users.find(user => user.firstName === name);
          return user ? of(user) : EMPTY;
        }),
        catchError(err => throwError(() => 'Error in getUser method'))
      );
  }
  createUser(user: UserModel): void {
    userList.push(user);
  }
  updateUser(user: UserModel): void {
    const i = userList.findIndex(u => u.id === user.id);
    if (i > -1) {
      userList.splice(i, 1, user);
    }
  }
}
