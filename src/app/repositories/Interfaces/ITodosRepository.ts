import { Observable } from 'rxjs';
import { Todo } from '../../core/models/todo.model';

export interface ITodosRepository {
  getTodosForUser(userId: number): Observable<Todo[]>;
}