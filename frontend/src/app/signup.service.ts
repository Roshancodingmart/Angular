import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  Signup=(user)=>{
    return this.http.post("http://localhost:3005/createUser", user)
  }
}
