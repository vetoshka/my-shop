import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './core/@ngrx/app.state';
import { AppSettingsService } from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(private store: Store<AppState> ,router: Router, private setting: AppSettingsService) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    this.appTitle.nativeElement.innerHTML = 'Shop';
    this.setting.getId().subscribe((setting) => console.log("Setting", setting.id));

  }

}


