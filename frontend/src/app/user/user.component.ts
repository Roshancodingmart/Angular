import { Component, OnInit } from "@angular/core";
import { TableService } from "../table.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {


  user_details;
  details;
  number: number = 5;
  page: number = 1;
  key:boolean=true;
  delete;
  constructor(private table: TableService) {}

  ngOnInit(): void {
    document.addEventListener("scroll", () => {
      let total = document.documentElement.scrollHeight - window.innerHeight;
      let scrolV = window.scrollY;
      if (scrolV === total) {
        this.handleTable();
        this.key = false;
      }
    });
    if (this.key) {
      this.handleTable();
    }
  }

  handleTable = () => {
    let total = 0;
    total = this.number * this.page;
    this.table.Table(total).subscribe(data => {
      this.details = data;
      this.user_details = this.details[0].user;
    });
    this.page++;
  };
  handleDelete=(event)=>{
    let bar = confirm('Are you sure want to delete this user?');
    if(bar)
    {this.table.Delete(event.target.id).subscribe(data=>{
      this.delete=data;
      console.log(this.delete.msg)
      this.handleTable();
    })}
  }

}
