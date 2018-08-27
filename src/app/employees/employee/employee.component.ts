import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService : EmployeeService, private _toastrService: ToastrService) { }
  
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.reset();
    this._employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName : '',
      Position: '',
      EmpCode: '',
      Office: ''
    }

   }
   onSubmit(form: NgForm) {
    this._employeeService.postEmployee(form.value)
    .subscribe( data => {
      this.resetForm(form);
      this._toastrService.success('New Candidate Added Successfully', 'Add Candidate')
    })
  }

}
