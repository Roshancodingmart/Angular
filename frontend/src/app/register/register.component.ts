import { Component, OnInit } from '@angular/core';
import { TableService } from "../table.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  number: number = 5;
  page: number = 1;
  key:boolean=true;
  regi;
  delete;
  add;
  mail;
  constructor(private table: TableService) { }

  ngOnInit(): void {

    document.addEventListener("scroll", () => {
      let total = document.documentElement.scrollHeight - window.innerHeight;
      let scrolV = window.scrollY;
      if (scrolV === total) {
        this.registerTable();
        this.key=false;
      }
    });
    if(this.key)
    // alert('calling registerTable')
    this.registerTable();
  }
  

  registerTable=()=>{
    let total = 0;
    // alert('inside registerTable')
    total = this.number * this.page;
    this.table.Register(total).subscribe(data=>{
      this.regi=data;
    })
    this.page++;
  }
  acceptRequest=(event)=>{
  this.table.Accept(event.target.id).subscribe(data=>{
    this.add=data;
  this.registerTable();
  this.accepted();
  })
  }
  deleteRequest=(event)=>{
   this.table.Reject(event.target.id).subscribe(data=>{
    this.delete=data;
    this.registerTable();
    this.rejected();
  })
  }
  accepted=()=>{
    this.table.Accepted().subscribe(data=>{
      this.mail=data;
      alert("message sent")
    })
  }
  rejected=()=>{
    this.table.Rejected().subscribe(data=>{
      this.mail=data;
      alert("message sent")
    })
  }
}
