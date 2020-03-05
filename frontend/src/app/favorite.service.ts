import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }
Favorites=(total)=>{
  console.log(total)
  return this.http.post("http://localhost:3005/getFavorites",{total:total});
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
