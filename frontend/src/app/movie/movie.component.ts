import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { Observable } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  top = [];
  movies;
  similar;
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.movie.TopRated().then(res => {
      this.top = res.results;
      console.log(this.top);
    });
  }

  handleSearch = async event => {
    console.log(event.target.value);
    await this.movie.Fetch(event.target.value).then(res => {
      this.movies = res;
    });
    await this.movie.Similar(event.target.value).then(resp=>{
      this.similar = resp;
      console.log(this.similar)
    });
  };
}
