import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TODOS_REPOSITORY_TOKEN } from './core/tokens/todos-repository.token';
import { provideHttpClient } from '@angular/common/http';
import { TodosRepository } from './core/repositories/Implementations/TodosRepository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideHttpClient(),
    {provide: TODOS_REPOSITORY_TOKEN, useClass: TodosRepository },]
};
