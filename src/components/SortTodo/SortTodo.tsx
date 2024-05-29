interface ISort {
	setSort: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export default function SortTodo({ setSort }: ISort) {
	const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue: string = e.target.value;
		const isCompleted: boolean | null =
			selectedValue === 'true'
				? true
				: selectedValue === 'false'
				? false
				: null;
		setSort(isCompleted);
		if (selectedValue === '') {
			setSort(null);
		}
	};

	return (
		<div>
			<select onChange={handleOption}>
				<option value=''>Сортировка</option>
				<option value='true'>Выполненные задачи</option>
				<option value='false'>Не выполненные задачи</option>
			</select>
		</div>
	);
}
