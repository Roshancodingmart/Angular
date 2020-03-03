import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  constructor(private http:HttpClient) { }
  Fetch=()=>{
    return this.http.get("http://localhost:3005/getwatched")
  }
  Movies=async(id)=>{
    let url="https://cors-anywhere.herokuapp.com/"+"https://api.themoviedb.org/3/movie/"+id+"?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US";
    let response=await fetch(url)
    let data=response.json();
    return data
  }
}
