import { Component, OnInit } from '@angular/core';
import { WatchedService } from "../watched.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})

export class WatchedComponent implements OnInit {
movies;
array=[]
  constructor(private watch:WatchedService,private _router:Router) { }

  ngOnInit(): void {
    this.fetch();
  }
  fetch=()=>{
this.watch.Fetch().subscribe(data=>{
  this.movies=data
  for(let i=0;i<this.movies.length;i++){
    this.watch.Movies(data[i].id).then(data=>{
      this.movies=data
      this.array.push(this.movies)
    })
  }
})
}
onClick=(id)=>{
this._router.navigate(["/movie_info",id])
}
}
