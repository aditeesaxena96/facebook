import { Component , OnInit} from '@angular/core';
import { AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import {  HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginauthenticationService } from './loginauthentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 

  constructor(private socialAuthService : AuthService, private route : Router, private service : LoginauthenticationService)
  {}
 
 item;
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      var t =this.item =this.service.getdata();
      t.subscribe(data=>console.log(data))
    }
    else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
       var t =this.item =this.service.getdata();
       t.subscribe(data=>console.log(data))
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
       console.log(socialPlatform+" sign in data : " , userData.name);
        // Now sign-in with userData
        // ...

       localStorage.setItem("imag", userData.image);
       localStorage.setItem("name", userData.name);
      //  var i=localStorage.getItem("imag");
      //  var q=localStorage.getItem("name");
      //  console.log(i);
      // console.log(name);
            
      }
    );
  }
}
