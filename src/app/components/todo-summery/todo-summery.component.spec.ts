import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSummeryComponent } from './todo-summery.component';

describe('TodoSummeryComponent', () => {
  let component: TodoSummeryComponent;
  let fixture: ComponentFixture<TodoSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSummeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
