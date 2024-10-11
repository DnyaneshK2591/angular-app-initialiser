import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStartup } from './AppStartup';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStartupService {
  appStartupObject: AppStartup = {
    appName: '',
    appDeveloper: '',
    appVersion: '',
  };
  constructor(private http: HttpClient) {}

  init() {
    return new Promise<AppStartup>((resolve, reject) => {
      this.http.get<AppStartup>('assets/app-startup.json').subscribe(res => {
        //console.log(res);
        this.appStartupObject = res;
        // setTimeout(()=>{
        //   resolve(this.appStartupObject);
        // },10000)
        resolve(this.appStartupObject);
      });
    });
  }
}
