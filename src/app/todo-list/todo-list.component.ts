import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html'
})
export class ToDoListComponent {
	@Input('toDoList') toDos: object[];
}