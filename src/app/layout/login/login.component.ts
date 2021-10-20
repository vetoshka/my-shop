import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements  OnDestroy {
  username: string = '';
  constructor(public authService: AuthService, private router: Router) { }
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
          this.router.navigate([redirect]);
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
