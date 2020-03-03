import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { Observable } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  top = [];
  movies;
  similar;
  img;
  total;
  pages=[];
  constructor(private movie: MovieService,
    private _router: Router) {}

  ngOnInit(): void {
    this.movie.TopRated(1).then(res => {
      this.top = res.results;
      this.total=res.total_pages
        // for(let i=1;i<=this.total;i++){
        //   this.pages.push(i)
        // }
        // console.log(this.pages)

    });
    
  }

  handleSearch = async event => {
    console.log(event.target.value);
    await this.movie.Fetch(event.target.value).then(res => {
      this.movies = res;
      this.img='https://image.tmdb.org/t/p/w185'+this.movies.backdrop_path
      console.log(this.movies)
    });
    await this.movie.Similar(event.target.value).then(resp=>{
      this.similar = resp;
      console.log(this.similar)
    });
  };
  Info=(id)=>{
    this._router.navigate(['/movie_info',id])
    // console.log("hi")
  }
  onClick=(id)=>{
    this._router.navigate(['/movie_info',id])
// console.log(id)
  }
  pageNo=(page)=>{
    console.log(page)
    this.movie.TopRated(page).then(data=>{
      this.top = data.results;
    })
  }
}
