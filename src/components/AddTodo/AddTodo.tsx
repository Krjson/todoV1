interface IAddTodo {
	createTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
	todo: string;
	handleKey: ( e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function AddTodo({ createTodo, todo, handleKey }: IAddTodo) {
	
	return (
		<div>
			<input type='text' onChange={createTodo} value={todo} onKeyDown={handleKey}/>
		</div>
	);
}
