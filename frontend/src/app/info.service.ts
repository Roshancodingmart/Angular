import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  Fetch = async id => {
    let url =
      "https://cors-anywhere.herokuapp.com/" +
      "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
  Check=(movies)=>{
    return this.http.post("http://localhost:3005/checkList",{id:movies})
  }
  Trailer=async(movie)=>{
    let url =
      "https://cors-anywhere.herokuapp.com/" +
      "https://api.themoviedb.org/3/movie/"+movie+"/videos?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US";
      let response=await fetch(url)
      let data = await response.json();
    return data
  }
  WatchList=(movie)=>{
    return this.http.post("http://localhost:3005/watchList",{id:movie})
      }
  Favorite=(movie)=>{
    return this.http.post("http://localhost:3005/favorite",{id:movie})
  }
  Watched=(movie)=>{
    return this.http.post("http://localhost:3005/watched",{id:movie})
  }
  Add=(list,id)=>{
    return this.http.post("http://localhost:3005/addToPlayList",{id:id,list:list})
  }
  Get=()=>{
    return this.http.get("http://localhost:3005/getPlayList")
  }
}
