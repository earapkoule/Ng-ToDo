import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-add-todo-input',
	templateUrl: './add-todo-input.component.html'
})
export class AddToDoInputComponent {
	newTodo = '';

	@Output('onAddClick') clickEvent = new EventEmitter<string>();;

	addStuff(newTodo: string) {
		this.clickEvent.emit(newTodo);
	};
}