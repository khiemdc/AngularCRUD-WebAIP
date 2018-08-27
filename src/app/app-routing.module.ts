import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent }    from './employees/personal/personal.component';
import { WorkComponent }        from './employees/work/work.component';
import { AddressComponent }     from './employees/address/address.component';
import { ResultComponent }      from './employees/result/result.component';

import { WorkflowGuard }        from './employees/workflow/workflow-guard.service';
import { WorkflowService }      from './employees/workflow/workflow.service';

import { EmployeesComponent } from './employees/employees.component';

import { EmployeeComponent } from './employees/employee/employee.component';


export const appRoutes: Routes = [
  { path: 'employees',  
    component: EmployeesComponent,
    children: [
      { path: 'employee',  component: EmployeeComponent}
      // { path: 'employees/personal',  component: PersonalComponent}
    ]
  },

  
    // 2nd Route
    { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    // { path: '',   redirectTo: '/employees', pathMatch: 'full' },
    // 6th Route
    // { path: '**', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}
export const  routingComponents = [EmployeesComponent,
                                    EmployeeComponent,
                                    PersonalComponent,
                                    WorkComponent,
                                    AddressComponent

                              ]