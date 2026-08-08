import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Department {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    private http = inject(HttpClient);
    private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    getTodo(): Observable<Department> {
        return this.http.get<Department>(this.apiUrl);
    }

}