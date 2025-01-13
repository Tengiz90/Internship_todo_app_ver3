import { map, Observable } from 'rxjs';
import { ITodosRepository } from "../Interfaces/ITodosRepository";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo.model';

@Injectable({
    providedIn: 'root',
  })
export class TodosRepository implements ITodosRepository {
    constructor(private http: HttpClient){}
    getTodosForUser(userId: number): Observable<Todo[]> {
        return this.http.get<Todo[]>("https://localhost:7126/api/Todos/GetTodos");
    }
    
}