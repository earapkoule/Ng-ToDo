import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	newTodo = '';
	todos = [{name:'wash', id: 1}, {name:'program', id: 2}, {name:'sleep', id: 3}];

	constructor() {}

	addStuff(newTodo: string) {
		this.todos.push(newTodo);
	};
}


