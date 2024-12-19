export class Todo {
    constructor(
        public id: number,
        public name: string,
        public completed: boolean,
        public toggleCompletedErrorMessage: string = "",
        public deleteErrorMessage: string = "" 

      ) {}

      toggleCompleted(): void {
        this.completed = !this.completed;
      }
  }