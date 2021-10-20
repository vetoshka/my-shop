import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  constructor(private router: Router, private route: ActivatedRoute,) { }
  onGoBack(): void {
    this.router.navigate(['./../'], { relativeTo: this.route })

  }
}
