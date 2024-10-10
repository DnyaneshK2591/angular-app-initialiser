import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStartup } from './AppStartup';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStartupService {
 
  constructor(private http: HttpClient) {
    
  }

  init() {
    return new Promise<void>((resolve,reject)=>{
      this.http.get('assets/app-startup.json').subscribe((res)=>{
        console.log(res);
        resolve();
      })
    });
  }
}
