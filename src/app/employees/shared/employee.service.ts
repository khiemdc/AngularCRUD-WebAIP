import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";




import {Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //variable to post employee to data table
  //corecpodent with method PostEmployee in WebAPI
  selectedEmployee: Employee;

  //variable to get employee from data table and display on Employee List component
  //corecpodent with method GetEmployee in WebAPI
  employeeList: Employee[];

  constructor(private _http: Http) { }

  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this._http.post('http://localhost:64734/api/Employee',body,requestOptions).pipe(map(x => x.json()));
  }

  getEmployeeList() {
    this._http.get('http://localhost:64734/api/Employee')
    .pipe(map( (data : Response) =>{
      return data.json() as Employee[];
      
    }))
  }
}
