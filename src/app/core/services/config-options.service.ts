import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  configModel!:ConfigModel;

  constructor() { }

  setConfig(config:Partial<ConfigModel>):void{
    this.configModel =  {...this.configModel, ...config};
  }

  getConfig(): ConfigModel {
    return this.configModel;
  }
}
