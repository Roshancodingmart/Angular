import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "../watchlist.service";
import { Router } from "@angular/router";
import { from } from "rxjs";

@Component({
  selector: "app-watchlist",
  templateUrl: "./watchlist.component.html",
  styleUrls: ["./watchlist.component.css"]
})
export class WatchlistComponent implements OnInit {
  movie;
  movies;
  array = [];
  watched;
  id = [];
  total: number = 4;
  constructor(private watch: WatchlistService, private _router: Router) {}

  ngOnInit(): void {
    this.scroll();
    this.watchList();
    this.check();
  }
  scroll = () => {
    document.addEventListener("scroll", () => {
      let total = document.documentElement.scrollHeight - window.innerHeight;
      let scrolV = window.scrollY;
      if (scrolV === total) {
        this.watchList();
        this.total=this.total+4;
      }
    });
  };
  watchList = () => {

    this.watch.Watchlist(this.total).subscribe(data => {
      this.movie = data;
      this.array=[];
      for (let i = 0; i < this.movie.length; i++) {
        this.watch.Movies(data[i].id).then(data => {
          this.movies = data;
          // console.log(this.movies.title)
          this.array.push(this.movies);
          // console.log(this.array.length)
        });
      }
    });
  };
  check = () => {
    this.id=[]
    this.watch.Check().subscribe(data => {
      this.watched = data;
      for (let i = 0; i < this.watched.length; i++) {
        this.id.push(parseInt(this.watched[i].id));
        console.log(this.id)
      }
    });
  };
  onClick = id => {
    this._router.navigate(["/movie_info", id]);
  };
}
