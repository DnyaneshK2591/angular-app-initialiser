import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStartupService } from './app-startup.service';
import { AppStartup } from './AppStartup';
import { Observable } from 'rxjs';

export function appInitialisation(appStartupService: AppStartupService) {
  return (): Promise<AppStartup> => {
    return appStartupService.init();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitialisation,
      deps: [AppStartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
