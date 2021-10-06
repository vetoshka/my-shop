import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantModel } from './models/constant.model';
import { constantsService } from './services/constants.service';
import { generatedString, GeneratorFactory } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';
import { LocalStorageService, shopLocalStorage } from './services/local-storage.service';



export const constantValue: ConstantModel = {
  app: 'Shop',
  ver: '1.0',
  author: "vvv"
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers:[
    { provide: constantsService , useValue: constantValue },
    { provide: LocalStorageService , useValue: shopLocalStorage },
    { provide: generatedString, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
  ]
})
export class CoreModule { }
