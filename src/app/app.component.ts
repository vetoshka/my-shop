import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    this.appTitle.nativeElement.innerHTML = 'Shop';
  }

}


