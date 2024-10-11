import { Component } from '@angular/core';
import { AppStartupService } from './app-startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app-initialiser';
  appName = '';
  appVersion = '';
  appDeveloper = '';

  constructor(appStartupService: AppStartupService) {
    console.log(appStartupService.appStartupObject);
    this.appName = appStartupService.appStartupObject.appName;
    this.appVersion = appStartupService.appStartupObject.appVersion;
    this.appDeveloper = appStartupService.appStartupObject.appDeveloper;
  }
}
