import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';

export interface ITodosRepository {
  getTodosForUser(userId: number): Observable<Todo[]>;
}