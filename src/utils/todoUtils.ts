import { ITodoList } from '../data/data';

export function addTodo(todos: ITodoList[], todo: string): ITodoList[] {
	const idArray: number[] = todos.length > 0 ? todos.map(item => item.id) : [0];
	const currentId: number = Math.max(...idArray) + 1;
	const updatedTodos: ITodoList[] = [
		...todos,
		{
			id: currentId,
			todo,
			complete: false,
		},
	];
	return updatedTodos;
}
