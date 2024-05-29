interface IButtonProps {
	addTodo: React.MouseEventHandler<HTMLButtonElement>;
	children: string;
}

export default function Button({ addTodo, children }: IButtonProps) {
	return <button onClick={addTodo}>{children}</button>;
}
