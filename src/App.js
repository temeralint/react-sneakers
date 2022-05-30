import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

let arr = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12990,
		path: '/img/sneakers/1.jpg'
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: 8990,
		path: '/img/sneakers/2.jpg'
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 9990,
		path: '/img/sneakers/3.jpg'
	},
	{
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 11990,
		path: '/img/sneakers/4.jpg'
	}
]

function App() {
  return (
	<div className="wrapper clear">
		<Header/>
		<Overlay/>

		<div className="content p-40">
			<div className="d-flex justify-between align-center mb-40">
				<h2 className="">Все кроссовки</h2>
				<div className="search">
					<img src="/img/search.svg" alt="search" />
					<input placeholder="Поиск" type="text" />
				</div>
			</div>
			
			<div className="sneakers_wrapper d-flex justify-between">
				{
					arr.map(item => {
						return <Card name={item.name} price={item.price} path={item.path}/>
					})
				}
			</div>

		</div>
	</div>
  );
}

export default App;
