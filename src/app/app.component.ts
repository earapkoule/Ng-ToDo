import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {	
	todos = [{name:'wash', id: 1}, {name:'program', id: 2}, {name:'sleep', id: 3}];
	id =3;

	addNewToDo(newTodoName: string){
		this.id++;
		const temp = {
			name: newTodoName,
			id: this.id
		};
		this.todos.push(temp);
	}
}


