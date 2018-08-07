import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

export function getAuthServiceConfigs()
{
  let config= new AuthServiceConfig(
    [
      {
        id : FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('292429774847463')
      }
    ]
  )
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [{ provide :AuthServiceConfig,
  useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
