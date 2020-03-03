import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }
  GetList=(id)=>{
    return this.http.post("http://localhost:3005/getList",{id:id})
  }
  Movies=async(id)=>{
    console.log(id)
    let url="https://cors-anywhere.herokuapp.com/"+"https://api.themoviedb.org/3/movie/"+id+"?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US"
    let response = await fetch(url)
    let data = response.json()
    return data
  }
}
