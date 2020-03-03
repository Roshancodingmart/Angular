import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlaylistService } from "../playlist.service";
import { FileHandle } from '../dragDrop.directive';
import { from } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";
@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"]
})
export class PlaylistComponent implements OnInit {
  result;
  name = { photo: "", title: "", description: "" };
  show=false;
  list;
  base64textString = [];
  photo;
  files = [];
  img;
  constructor(private play: PlaylistService,private _router: Router) {}

  ngOnInit(): void {
    this.getPlayList()
  }
  getPlayList=()=>{
    this.play.Get().subscribe(data=>{
      this.list=data
      this.list=this.list.list
      console.log(this.list)
    })
  }
  New = a => {
    this.show = a;
  };
  back=(a)=>{
    this.show=a;
  }
  onChange = event => {
    this.name[event.target.name] = event.target.value;
    console.log(this.name)
  };
  create = async() => {
    let photo = this.base64textString[0].replace('{',"")
    console.log(photo,"hi")
    // alert(this.photo)
    // alert(this.name.title)
    // alert(this.name.description)
    await this.play.Create(this.photo,this.name.title,this.name.description).subscribe(data => {
      this.result = data;
      console.log(this.result.msg);
      if(this.result.msg=="playlist created"){
        this.back(false);
      }
    })
  }


  filesDropped(file: FileHandle[]): void {
    this.files = file;
    console.log(this.files[0].file)
    this.img=this.files[0].file;
    if (this.img) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.img);
    }
  }
  onUploadChange(evt: any) {
    console.log(this.files)
    console.log( evt.target.files[0])
      this.img = evt.target.files[0];
    if (this.img) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.img);
    }
  }
  
  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.photo='data:image/png;base64,' + btoa(e.target.result)
    console.log(this.photo)
  }
  navigate=(id)=>{
    this._router.navigate(['/list',id])
  }
}
