import React, { useState } from 'react';
import Button from './UI/Button';
import AddTodo from './components/AddTodo/AddTodo';
import SortTodo from './components/SortTodo/SortTodo';
import TodoList from './components/TodoList/TodoList';
import data, { ITodoList } from './data/data';
import { addTodo } from './utils/todoUtils';

export default function App() {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<ITodoList[]>(data);
	const [sort, setSort] = useState<boolean | null>(null);

	function createTodo(e: React.ChangeEvent<HTMLInputElement>) {
		setTodo(e.target.value);
	}

	function addTodoHandler() {
		const updatedTodos = addTodo(todos, todo);
		setTodos(updatedTodos);
		setTodo('');
	}

	function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == 'Enter') {
			addTodoHandler();
		}
	}

	return (
		<div>
			<h1>Todo list</h1>
			<AddTodo createTodo={createTodo} todo={todo} handleKey={handleKey} />
			<Button addTodo={addTodoHandler}>Add todo</Button>
			<TodoList todos={todos} setTodos={setTodos} sort={sort} />
			<SortTodo setSort={setSort} />
		</div>
	);
}
