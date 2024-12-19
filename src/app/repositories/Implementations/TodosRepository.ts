import { map, Observable } from 'rxjs';
import { Todo } from "../../core/models/todo.model";
import { ITodosRepository } from "../Interfaces/ITodosRepository";
import { HttpClient } from "@angular/common/http";

export class TodosRepository implements ITodosRepository {
    constructor(private http: HttpClient){}
    getTodosForUser(userId: number): Observable<Todo[]> {
        return this.http.get<Todo[]>("https://localhost:7126/api/Todos/GetTodos");
    }
    
}