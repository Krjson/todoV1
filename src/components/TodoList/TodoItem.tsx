import ITodoLists from '../../types/todoListTypes';

export default function TodoItem({ todo, todos, setTodos }: ITodoLists) {
	function handleCheckboxChange() {
		if (todo) {
			const newTodo = { ...todo, complete: !todo.complete };
			const updatedTodos = todos.map(item => (item === todo ? newTodo : item));
			setTodos(updatedTodos);
		}
	}

	function handleRemove() {
		if (todo) {
			const filteredTodos = todos.filter(item => item !== todo);
			setTodos(filteredTodos);
		}
	}

	return (
		<div>
			<h1 onClick={handleCheckboxChange} style={{ cursor: 'pointer' }}>
				{todo?.todo}
				<input
					type='checkbox'
					checked={todo?.complete || false}
					onChange={() => {}}
				/>
			</h1>
			<button onClick={handleRemove}>Удалить</button>
		</div>
	);
}
