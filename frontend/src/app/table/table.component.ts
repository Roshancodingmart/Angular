import { Component, OnInit } from "@angular/core";
import { TableService } from "../table.service";
import { from } from "rxjs";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  user_details;
  details;
  rows;
  array = [];
  number: number = 5;
  page: number = 1;
  key:boolean=true;
  regi;
  delete;
  add;
  constructor(private table: TableService) {}

  ngOnInit(): void {
    // document.addEventListener("scroll", () => {
    //   let total = document.documentElement.scrollHeight - window.innerHeight;
    //   let scrolV = window.scrollY;
    //   if (scrolV === total) {
    //     this.handleTable();
    //     this.registerTable();
    //     this.key=false;
    //   }
    // });
    // if(this.key)
    // {this.handleTable();
    // this.registerTable();}

  }
  // handleTable = () => {
  //   let total = 0;
  //   total = this.number * this.page;
  //   console.log(total,this.number,this.page)
  //   this.table.Table(total).subscribe(data => {
  //     this.details = data;
  //     this.user_details = this.details[0].user;
  //   });
  //   this.page++;
  // };
// registerTable=()=>{
//   this.table.Register().subscribe(data=>{
//     this.regi=data;
//   })
// }
// acceptRequest=(event)=>{
// this.table.Accept(event.target.id).subscribe(data=>{
//   this.add=data;
// this.registerTable();
// this.handleTable();
// })
// }
// deleteRequest=(event)=>{
//  this.table.Reject(event.target.id).subscribe(data=>{
//   this.delete=data;
//   this.registerTable();
// })
// }
}
