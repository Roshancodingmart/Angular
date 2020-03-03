import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InfoService } from "../info.service";
import { } from "../loader/loader.component"
import { from } from "rxjs";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  image;
  video;
  home;
  movie;
  id;
  years = [];
  year;
  message;
  show;
  value;
  view;
  fav;
  matter;
  watched_bol;
  information;
  play_list;
  constructor(activatedRoute: ActivatedRoute, private info: InfoService) {
    activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.check(params.id);
      this.trailer(params.id);
    });
  }

  ngOnInit(): void {
    this.getPlayList();
    this.home = "http://localhost:4200/movie";
    this.info.Fetch(this.id).then(data => {
      this.movie = data;
      this.image = "http://image.tmdb.org/t/p/w300/" + this.movie.poster_path;
      this.years = this.movie.release_date.split("-");
      this.year = this.years[0];
    });
  }
  getPlayList=()=>{
    this.info.Get().subscribe(data=>{
      this.play_list=data;
      this.play_list = this.play_list.list
      console.log(this.play_list)
    })
  }
  watchList = event => {
    this.info.WatchList(event.target.id).subscribe(data => {
      this.message = data;
      this.show = this.message.bol;
      console.log(this.message.msg);
    });
  };
  favorite=(event)=>{
this.info.Favorite(event.target.id).subscribe(data=>{
  this.view=data
  this.fav=this.view.bol
  console.log(this.view.msg);
})
  }
  watched=(id)=>{
    console.log(id)
    this.info.Watched(id).subscribe(data=>{
      this.matter=data
      this.watched_bol=this.matter.bol
      console.log(this.matter.msg)
    })
  }
  check = id => {
    this.info.Check(id).subscribe(res => {
      this.value = res;
      this.show = this.value.status;
      this.fav = this.value.fav
      this.watched_bol=this.value.watched_bol
    });
  };
  trailer=(id)=>{
    this.info.Trailer(id).then(data=>{
      let key=data
     if(key.results[1]!=undefined){
      this.video = "https://www.youtube.com/watch?v=" + key.results[1].key;
     }
    })
  }
  addToPlayList=(name,id)=>{
    this.info.Add(name,id).subscribe(data=>{
      this.information=data
      alert(this.information.msg)
    })
    console.log(name,id)
  }
}
