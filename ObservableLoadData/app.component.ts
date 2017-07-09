import { Component, OnInit } from '@angular/core';
import { EmployeeSerice } from "app/service/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'app';
  private url: string = "http://localhost:53396/api/Employee/";

  constructor(private employeeService:EmployeeSerice){

  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res=>{
      console.log(res);
    }, error=>{
      console.log(error);
    })
  }

}
