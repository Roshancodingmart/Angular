import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient,private cookieService: CookieService) { }
  Table=(number)=>{
    let token=this.cookieService.get("Token");
    return this.http.post("http://localhost:3005/userTable",{page:number},{
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
}
