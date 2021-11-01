import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/core/@ngrx/app.state';
import { AuthService } from 'src/app/core/services/auth.service';
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements  OnDestroy {
  username: string = '';
  constructor(public authService: AuthService,  private store: Store<AppState>) { }
  private unsubscribe: Subject<void> = new Subject();
  ngOnDestroy(): void {
    this.unsubscribe.complete();
  }

  onLogout(): void {
    this.authService.logout();
  }
  onLogin(): void {
    const observer = {
      next: () => {
        if (this.authService.isLoggedIn) {
          console.log("log",this.authService.isAdmin)
          const redirect = this.authService.isAdmin
            ? '/admin'
            :'/user' ;
            this.store.dispatch(RouterActions.go({
              path: [redirect]
              }));
             
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    this.authService
      .login(this.username)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }
}
