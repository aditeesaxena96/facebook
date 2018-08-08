import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule, } from '@angular/http';
import { LoginauthenticationService } from './loginauthentication.service';
import { HttpClientModule } from '@angular/common/http'


const routes: Routes= [ 
 
  { path: 'display', component:DisplayComponent
  
},

];

export function getAuthServiceConfigs()
{
  let config= new AuthServiceConfig(
    [
      {
        id : FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('292429774847463')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("777934196617-ol99qpt9cs9dujcme9sq8im9qlc9hbl6.apps.googleusercontent.com")
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
    SocialLoginModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [{ provide :AuthServiceConfig, 
  useFactory: getAuthServiceConfigs},
   LoginauthenticationService 
],
 

  bootstrap: [AppComponent]
})
export class AppModule { }
