import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FavoriteService } from "../favorite.service";
import { from } from "rxjs";
@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  movie;
  movies;
  array = [];
  watched;
  id = [];
  key = true;
  total=4;
  constructor(private _router: Router, private fav: FavoriteService) {}

  ngOnInit(): void {
    this.scroll();
    this.favorite();
    this.check();
    
  }
  favorite = () => {
    
    this.fav.Favorites(this.total).subscribe(data => {
      this.movie = data;
      this.array=[]
      for (let i = 0; i < this.movie.length; i++) {
        this.fav.Movies(data[i].id).then(data => {
          this.movies = data;
          this.array.push(this.movies);
        });
      }
    });
  };
  scroll = () => {
    // console.log(this.total)
    document.addEventListener("scroll", () => {
      let total = document.documentElement.scrollHeight - window.innerHeight;
      let scrolV = window.scrollY;
      if (scrolV === total) {
        this.favorite();
        this.total = this.total+4
      }
    });
  };
  check = () => {
    
    if (this.id == null) {
      this.fav.Check().subscribe(data => {
        this.watched = data;
        this.id=[]
        for (let i = 0; i < this.watched.length; i++) {
          this.id.push(parseInt(this.watched[i].id));
        }
      });
    }
  };
  onClick = id => {
    this._router.navigate(["/movie_info", id]);
    // console.log(id)
  };

  handleSearch = event => {
    console.log(event.target.value);
  };
}
