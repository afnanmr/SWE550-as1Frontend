import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import {Router} from '@angular/router';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-create-emplyee',
  templateUrl: './create-emplyee.component.html',
  styleUrls: ['./create-emplyee.component.css']
})
export class CreateEmplyeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.router.navigate(['/employees']);
  }

}
