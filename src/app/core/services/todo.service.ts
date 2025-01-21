import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TODOS_REPOSITORY_TOKEN } from '../tokens/todos-repository.token';
import { ITodosRepository } from '../repositories/Interfaces/ITodosRepository';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = []
  private complete: number = 0;
  private incomplete: number = 0;
  private haveTodosLoaded = false;
  constructor( @Inject(TODOS_REPOSITORY_TOKEN) private todosRepository: ITodosRepository) { 
  }

  public getTodosFromServer(userId: number): Observable<Todo[]>{
    return this.todosRepository.getTodosForUser(userId).pipe(
      map((data: Todo[]) => {
        return data.map(todo => new Todo(todo.id, todo.name, todo.completed, todo.createdAt))
      }
    )
  )
  }
  
  public setTodosLocally(todos: Todo[]): void {
    this.todos = todos;
    this.updateCounts();
  }

    public updateCounts() {
    this.complete = this.todos.filter(todo => todo.completed === true).length;
    this.incomplete = this.todos.length - this.complete;
  }

  public saveTodoLocally(id: number, name: string){
    this.todos.push(new Todo(id, name, false, new Date()))
    this.updateCounts()
  }
  
  public getLocalTodos(): Todo[] {
    return this.todos;
  }

  public getLocalCompleteAmount(){
    return this.complete
  }

  public getLocalIncompleteAmount(){
    return this.incomplete
  }

  public setHaveTodosLoadedToTrue(){
    this.haveTodosLoaded = true;
  }

  public getHaveTodosLoaded(): boolean{
    return this.haveTodosLoaded;
  }
}
