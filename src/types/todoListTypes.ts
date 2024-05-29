import { ITodoList } from '../data/data';

export default interface ITodoLists {
	todos: ITodoList[];
	sort?: boolean | null;
	setTodos: React.Dispatch<React.SetStateAction<ITodoList[]>>;
	todo?: ITodoList; 

}