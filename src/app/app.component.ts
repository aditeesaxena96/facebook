import { Component , OnInit} from '@angular/core';
import { AuthService,
  FacebookLoginProvider
} from 'angular-6-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private socialAuthService : AuthService)
  {}
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
       //console.log(socialPlatform+" sign in data : " , userData.name);
        // Now sign-in with userData
        // ...

       localStorage.setItem("imag", userData.image);
       localStorage.setItem("name", userData.name);
       var i=localStorage.getItem("imag");
       var q=localStorage.getItem("name");
       console.log(i);
      // console.log(name);
            
      }
    );
  }
}
