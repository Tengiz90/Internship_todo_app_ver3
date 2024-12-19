import { InjectionToken } from '@angular/core';
import { ITodosRepository } from '../../repositories/Interfaces/ITodosRepository';

// Create an Injection Token
export const TODOS_REPOSITORY_TOKEN = new InjectionToken<ITodosRepository>('TodosRepository');
