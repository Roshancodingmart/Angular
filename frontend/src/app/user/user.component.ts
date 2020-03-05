import { Component, OnInit } from "@angular/core";
import { TableService } from "../table.service";
import jsPDF from "jspdf";
import readXlsxFile from "read-excel-file";
import "jspdf-autotable";
import { FileHandle } from "../dragDrop.directive";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user_details;
  details;
  number: number = 10;
  page: number = 1;
  key: boolean = true;
  delete;
  name;
  email;
  show = false;
  message;
  response;
  output;
  view = false;
  files = [];
  input;
  visible=false;
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
  filesDropped(file: FileHandle[]): void {
    this.input = file[0].file;
    console.log(this.input);
    readXlsxFile(this.input).then(rows => {
      this.output = rows;
      this.view = true;
    });
  }
  Excel = () => {
    this.table.excel().subscribe(data => {
      this.response = data;
      console.log(this.response);
      const url = window.URL.createObjectURL(new Blob([this.response]));
      console.log(this.response);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Report.xlsx");
      document.body.appendChild(link);
      link.click();
    });
  };

  Pdf = () => {
    let doc = new jsPDF();
    doc.autoTable({ html: "#table" });
    doc.save("table.pdf");
  };
  import=()=>{
    this.visible=true;
  }
  Import = () => {
    this.input = document.getElementById("fileinput");
    console.log(this.input);
    this.input.addEventListener(
      "change",
      () => {
        console.log(this.input.files[0]);
        readXlsxFile(this.input.files[0]).then(rows => {
          this.output = rows;
          this.view = true;
        });
      },
      false
    );
  };
  Add = () => {
    for (let i = 0; i < this.output.length; i++) {
      console.log(this.output[i][0], this.output[i][1], this.output[i][2]);
      this.table
        .addUser(this.output[i][0], this.output[i][1], this.output[i][2])
        .subscribe(data => {
          console.log(data);
          this.visible=false;
          this.handleTable();
        });
    }
    this.input=""
    this.view = false;
  };
  close=()=>{
    this.visible=false;
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
  handleDelete = event => {
    let bar = confirm("Are you sure want to delete this user?");
    if (bar) {
      this.table.Delete(event.target.id).subscribe(data => {
        this.delete = data;
        console.log(this.delete.msg);
        this.handleTable();
      });
    }
  };
  handleEdit = (id, name) => {
    window.scrollTo(0, 0);
    console.log(id, name);
    this.name = name;
    this.email = id;
    this.show = true;
  };
  EditUser = event => {
    event.preventDefault();
    console.log(this.name, this.email);
    this.table.Edit(this.email, this.name).subscribe(data => {
      this.message = data;
      this.message = this.message.msg;
      alert(this.message);
      this.show = false;
      this.handleTable();
      console.log(this.name.data, this.name.msg);
    });
  };
  Change = event => {
    this.name = event.target.value;
    // console.log(this.name)
  };
}
