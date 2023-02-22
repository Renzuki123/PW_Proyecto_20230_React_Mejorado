
export const ButtonList = ({ categories, filterCategory }) => {
	return (
		<div className='categories'>
			{categories.map(category => (
				<button
					type='button'
					className='btn-category'
					onClick={() => filterCategory(category)}//Define como parametro a category para poder realizar el filtro
					key={category}
				>
					{category}
				</button>
			))}
		</div>
	);
};
export default ButtonList;
