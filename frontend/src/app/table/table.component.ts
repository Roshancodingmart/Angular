import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
user_details;
details;
rows;
array=[];
  constructor(private table:TableService) { }

  ngOnInit(): void {
    this.handleTable(0);
  }
handleTable=(num)=>{
  let number=num;
  this.table.Table(number).subscribe(data=>{
    
    this.details= data
    this.user_details=this.details[0].user
    this.rows=this.details[0].count
    this.Pagination(this.rows);
  })
}
Pagination=(total)=>{
  this.array=[]
  if(total%5==0){
    total=total/5
  }
  else{
    total=total/5+1
  }
  for(let i=1;i<total;i++){
    this.array.push(i)
  }
}
toBefore=()=>{

}
toNext=()=>{

}
toStart=()=>{

}
toEnd=()=>{}
}
