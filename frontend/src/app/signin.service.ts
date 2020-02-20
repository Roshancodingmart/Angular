import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }
  Signin=(user)=>{
    return this.http.post("http://localhost:3005/signinUser", user)
  }
}
