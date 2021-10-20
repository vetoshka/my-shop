import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/core/guards/interfaces/can-component-deactivate.interface';
import { DialogServiceService } from 'src/app/core/services/dialog-service.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements CanComponentDeactivate {

  constructor(private dialogService: DialogServiceService) { }

  canDeactivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
  return this.dialogService.confirm('Discard changes?');
}
}
