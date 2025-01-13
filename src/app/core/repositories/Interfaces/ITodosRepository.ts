import { Observable } from 'rxjs';
import { Todo } from '../../models/Todo.model';

export interface ITodosRepository {
  getTodosForUser(userId: number): Observable<Todo[]>;
}