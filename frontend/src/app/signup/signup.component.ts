import { Component, OnInit } from "@angular/core";
import { SignupService } from "../signup.service";
import { Observable } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user = {
    name:"",
    mail:"",
    pass:""
  };
  sign;
  constructor(private signup: SignupService) {}

  ngOnInit(): void {}

  handleChange = event => {
    this.user[event.target.name] = event.target.value;
  };

  handleSignup = async () => {
    await this.signup.Signup(this.user).subscribe(data => {
      this.sign = data;
      if(this.sign.data=="User added to database")
      {
        alert("User added to database");
      }
    });
    this.clear();
  };

  clear = () => {
    this.user={
      name:"",
    mail:"",
    pass:""
  };
}
}
