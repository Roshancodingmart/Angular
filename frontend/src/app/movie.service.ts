import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  Fetch = async name => {
    let movie = name.replace(" ","");
    if(movie.length==name.length){
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      let targetUrl =
        "https://www.themoviedb.org/search/trending?language=en-US&query=" +
        movie;
      let url = proxyUrl + targetUrl;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.results[0].id);
      if(data.results[0].id!=undefined){let target =
        "https://api.themoviedb.org/3/movie/" +
        data.results[0].id +
        "?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US";
      url = proxyUrl + target;
      let res = await fetch(url);
      let data2 = await res.json();
      console.log(data2);
        return data2;
    }
  }
  };
  TopRated = async() => {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let targetUrl =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US&page=1";
    let url = proxyUrl + targetUrl;
    let res = await fetch(url);
    let data2 = await res.json();
    console.log(data2);
    return data2;
  };
  Similar = async(name)=>{
    let id;
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let target =
        "https://www.themoviedb.org/search/trending?language=en-US&query=" +
        name;
      let url1 = proxyUrl + target;
      let resp = await fetch(url1);
      let data2 = await resp.json();
      id=data2.results[0].id;
    let targetUrl =
      "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=1b0dcc7cd2473b7e4881375867e68063&language=en-US&page=1";
    let url = proxyUrl + targetUrl;
      let response = await fetch(url);
      let data = await response.json();
      return data.results
  }
  
}
