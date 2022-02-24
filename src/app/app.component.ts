import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 public employees? : Employee[];

 constructor(private employeeService: EmployeeService){}

ngOnInit(): void {
    this.getEmployees();
}



  getEmployees():void{
  this.employeeService.getEmployee().subscribe(
    Response => {
      this.employees=Response;
    },
    erreur => {
      alert(erreur.message)
    }
    );
    

    
  
}


}
