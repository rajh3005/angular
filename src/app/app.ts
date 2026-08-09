import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GreetingPipe } from './greeting.pipe';
import { CamelCasePipe } from './camelcase.pipe';
import { HighlightDirective } from './textHIglist.dir';
import { TextBoxColorDirective } from './textbox-color.directive';
import { CapitalizeDirective } from './capitalize.directive';
import { Employee, EmployeeService } from './employee.service';
import { Department, TodoService } from './department.service';

interface UserFormData {
  name: string;
  phone: string;
  email: string;
  state: string;
  address: string;
  date: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet, GreetingPipe, CamelCasePipe, HighlightDirective, TextBoxColorDirective, CapitalizeDirective],
  templateUrl: './sample.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Customer Details';
  isActive = true;
  employees: Employee[] = [];
  responseTodo?: Department;
  constructor(private employeeService: EmployeeService, private todoService: TodoService) {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });

    this.todoService.getTodo().subscribe((todo) => {
      this.responseTodo = todo;
    });
  }
    
  protected customer: UserFormData = {
    name: '',
    phone: '',
    email: '',
    state: '',
    address: '',
    date: ''
  };

  submittedData: UserFormData | null = null;

  onNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Remove any numbers and special characters, keep only letters and spaces
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '').slice(0, 30);//USE MAX LENGHT 
    this.customer.name = input.value;
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Only allow digits and limit to 10 characters
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
    this.customer.phone = input.value;
  }

  onAddressInput(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    input.value = input.value.slice(0, 60);
    this.customer.address = input.value;
  }

  submitForm(form?: NgForm): void {
    if (form) {
      if (form.invalid) {
        return;
      }
    } else {
      if (!this.customer.name || !this.customer.email || !this.customer.phone || !this.customer.state || !this.customer.date) {
        return;
      }
    }
    this.submittedData = { ...this.customer };
  }

  resetForm(): void {
    this.customer = {
      name: '',
      phone: '',
      email: '',
      state: '',
      address: '',
      date: ''
    };
    this.submittedData = null;
  }
}

