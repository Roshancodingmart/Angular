import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InfoService } from "../info.service";
import { ListService } from "../list.service";
import { Router } from "@angular/router"
import { from } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  id;
  movie;
  movies;
  array=[];
  constructor(
    activatedRoute: ActivatedRoute,
    private info: InfoService,
    private list: ListService,
    private _router:Router
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.getList();
  }
  getList = () => {
    console.log(this.id)
    this.list.GetList(this.id).subscribe(data => {
      this.movie = data;
      console.log(this.movie.list)
      for(let i=0;i<this.movie.list.length;i++){
        this.list.Movies(this.movie.list[i].movie).then(data=>{
          this.movies=data
          this.array.push(this.movies)
        })
      }
      console.log(this.array)
    });
  };
  onClick=(id)=>{
    this._router.navigate(['/movie_info',id])
  }
}
