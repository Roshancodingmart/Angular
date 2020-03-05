import { Injectable } from "@angular/core";
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class TableService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  Table = number => {
    let token = this.cookieService.get("Token");
    return this.http.post(
      "http://localhost:3005/userTable",
      { page: number },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  };
  excel=()=>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get("http://localhost:3005/excel",{ headers, responseType: 'blob'});
  }
  Delete = id => {
    let token = this.cookieService.get("Token");
    return this.http.post("http://localhost:3005/deleteUser", { mail: id },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  };
  Edit=(id,name)=>{
    console.log(id,name)
    return this.http.post("http://localhost:3005/EditUser",{mail:id,name:name})
  }
  Register = total => {
    // alert(total+" :total")
    // alert("inside Register")
    return this.http.post("http://localhost:3005/getRegister", { page: total });
  };
  Accept = id => {
    return this.http.post("http://localhost:3005/createUser", { mail: id });
  };
  Reject = id => {
    return this.http.post("http://localhost:3005/rejectUser", { mail: id });
  };
  Accepted = () => {
    return this.http.post("http://localhost:3005/mailUser", {
      subject: "Sign up Successful!",
      text:
        "Your request to became the user, has been accepted. Your are now a member. Please Sign in to use the website. Thank you "
    });
  };
  Rejected = () => {
    return this.http.post("http://localhost:3005/mailUser", {
      subject: "Request rejected",
      text:
        "Your request for becoming a user in our website has been declined due to certain reasons. Please visit the website help to know more about your issue to sign up. Please do retry after some times.Thank you."
    });
  };
addUser=(name,email,password)=>{
  return this.http.post("http://localhost:3005/insertUser",{name:name,mail:email,pass:password})
}
}
