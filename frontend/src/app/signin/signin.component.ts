import { Component, OnInit } from "@angular/core";
import { SigninService } from "../signin.service";
import { Observable } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";
import { SignupService } from "../signup.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  user = {
    mail: "",
    pass: ""
  };
  sign;
  constructor(
    private signin: SigninService,
    private cookieService: CookieService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  handleChange = event => {
    this.user[event.target.name] = event.target.value;
  };
  handleSignin = async () => {
    await this.signin.Signin(this.user).subscribe(data => {
      this.sign = data;
      if (this.sign.msg == "Login Successful") {
        localStorage.setItem('user',this.sign.name)
        this.cookieService.set("Token", this.sign.token);
        if(this.sign.mail=="roshan@admin"){
          this._router.navigate(['/table'])
        }
        else{
          this._router.navigate(['/movie'])
        }
        
      }
      this.clear();
    });
  };
  clear = () => {
    this.user = {
      mail: "",
      pass: ""
    };
  };
}
