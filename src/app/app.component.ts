import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    this.appTitle.nativeElement.innerHTML = 'Shop';
  }
}


