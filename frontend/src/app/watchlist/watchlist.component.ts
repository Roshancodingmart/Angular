import { Component, OnInit } from '@angular/core';
import { WatchlistService } from "../watchlist.service"
import { Router } from "@angular/router";
import { from } from 'rxjs';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
movie;
movies;
array=[];
watched;
id=[];
  constructor(private watch:WatchlistService,private _router: Router) { }

  ngOnInit(): void {
    this.check();
    this.watch.Watchlist().subscribe(data=>{
      this.movie=data;
      for(let i=0;i<this.movie.length;i++){
        this.watch.Movies(data[i].id).then(data=>{
          this.movies=data
          this.array.push(this.movies)
        })
      }
      console.log(this.array)
    })
  }
  check=()=>{
    this.watch.Check().subscribe(data=>{
      this.watched=data
      console.log(this.watched,"hi")
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

}
