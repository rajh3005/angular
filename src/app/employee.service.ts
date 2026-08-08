import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
   employees: any[] = [
    { id: 1, firstName: 'John', lastName: 'Prasad' },
    { id: 2, firstName: 'Sam', lastName: 'Smith' },
    { id: 3, firstName: 'David', lastName: 'Johnson' }
  ];

    getEmployees() {
        return this.employees;
    }
}