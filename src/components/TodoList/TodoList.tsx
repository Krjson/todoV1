import { ITodoList } from '../../data/data';
import ITodoLists from '../../types/todoListTypes';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos, sort }: ITodoLists) {
	return (
		<div>
			{todos
				.filter(item => (sort === null ? item : item.complete === sort))
				.map((item: ITodoList) => {
					return (
						<TodoItem
							key={item.id}
							todo={item}
							setTodos={setTodos}
							todos={todos}
						/>
					);
				})}
		</div>
	);
}
