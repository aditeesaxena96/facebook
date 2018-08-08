import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { Http } from '../../node_modules/@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {map} from 'rxjs/operators'
import {  HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginauthenticationService  {

  constructor(private http:HttpClient) { }
  getdata() : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Basic QUM3N2ZiOWZhZmNlNWU5OWUxMWE0OGMwNTA1NTMyZWIzYzo0MjdjNjU4ODg5NWQzODkzMjg1ZTQzMmEzNTkwOGQ5NQ=='
      })

    };
    const body = new HttpParams().set('FriendlyName','Chatbox')
    return this.http.post('https://chat.twilio.com/v2/Services',body.toString(),httpOptions)
    
  }
  
}
