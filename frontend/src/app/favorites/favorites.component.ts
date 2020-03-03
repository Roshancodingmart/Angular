import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FavoriteService } from "../favorite.service";
import { from } from 'rxjs';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
movie;
movies;
array=[];
watched;
id=[];
key=true;
  constructor(private _router:Router,private fav:FavoriteService) { }

  ngOnInit(): void {
    document.addEventListener("scroll", () => {
      let total = document.documentElement.scrollHeight - window.innerHeight;
      let scrolV = window.scrollY;
      if (scrolV === total) {
        this.check();
        this.key = false;
      }
    });
    if (this.key) {
      this.check();
    }
    this.check();
    this.fav.Favorites().subscribe(data=>{
      this.movie=data;
      for(let i=0;i<this.movie.length;i++){
        this.fav.Movies(data[i].id).then(data=>{
          this.movies=data
          this.array.push(this.movies)
        })
      }
      console.log(this.array)
    })
  }
  check=()=>{
    this.fav.Check().subscribe(data=>{
      this.watched=data
      for(let i=0;i<this.watched.length;i++){
this.id.push(parseInt(this.watched[i].id))
      }
      console.log(this.id)
    })
  }
  onClick=(id)=>{
    this._router.navigate(['/movie_info',id])
    // console.log(id)
  }

handleSearch=(event)=>{
console.log(event.target.value)
}
}
