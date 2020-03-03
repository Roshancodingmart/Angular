import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  total=0;
  constructor(private http:HttpClient) { }
  Watchlist=()=>{
    this.total=this.total+3;
    return this.http.post("http://localhost:3005/getWatchList",{total:6});
  }
  Check=()=>{
    return this.http.get("http://localhost:3005/getWatched");
  }
  Movies=async(id)=>{
    let url="https://cors-anywhere.herokuapp.com/"+"https://api.themoviedb.org/3/movie/"+id+"?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US";
    let response=await fetch(url)
    let data=response.json();
    return data
  }
}
