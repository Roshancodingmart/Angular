import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PlaylistService {
  constructor(private http: HttpClient) {}
  Get = () => {
    console.log("Get");
    return this.http.get("http://localhost:3005/getPlayList");
  };
  Create = (photo, title, description) => {
    return this.http.post("http://localhost:3005/createPlayList", {
      photo: photo,
      name: title,
      desc: description
    });
  };
}
