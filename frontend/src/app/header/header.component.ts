import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  signed: boolean;
  user:string;
  constructor(private cookie: CookieService,
    private _router: Router) {}

  ngOnInit(): void {
    if (this.cookie.get("Token")) {
      this.signed = true;
      this.user=localStorage.getItem('user')
    } else {
      this.signed = false;
    }
  }
  handleLogout = () => {
    console.log(this.cookie)
    this.cookie.delete("Token");
    this.signed = true;
    this._router.navigate(['/'])
  };
}
