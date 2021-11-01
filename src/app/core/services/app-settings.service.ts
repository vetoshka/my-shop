import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, retry, tap } from 'rxjs';
import { SettingModel } from 'src/app/models/setting.model';
import { shopLocalStorage } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private key = 'key_id';
  private jsonURL = 'assets/app-setting.json';

  constructor(private http: HttpClient) {
  }

  public getId(): Observable<SettingModel> {
    let setting: SettingModel =JSON.parse(shopLocalStorage.getData(this.key))
    if (setting == null) {
      return this.http.get<SettingModel>(this.jsonURL).pipe(
        retry(2),
        tap(x => { 
          if(!x){x={id:"1"}}
          shopLocalStorage.setData(this.key, x) })
      )
    } else { return of(setting); }

  }
}