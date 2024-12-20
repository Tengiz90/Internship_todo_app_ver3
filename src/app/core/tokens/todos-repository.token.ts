import { InjectionToken } from '@angular/core';
import { ITodosRepository } from '../repositories/Interfaces/ITodosRepository';


export const TODOS_REPOSITORY_TOKEN = new InjectionToken<ITodosRepository>('TodosRepository');
