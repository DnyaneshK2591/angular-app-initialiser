import { Component } from '@angular/core';
import { AppStartupService } from './app-startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app-initialiser';
  constructor(appStartupService: AppStartupService) {
    
  }
}
