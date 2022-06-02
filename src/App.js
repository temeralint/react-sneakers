import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

function App() {
	const [isCartOpened, setIsCartOpened] = useState(false)
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		fetch('https://6297421e8d77ad6f75fe5a64.mockapi.io/items')
			.then(res => res.json())
			.then(res => setItems(res))
	}, [])

	const onAddToCart = (obj) => {
		setCartItems(prev => [...prev, obj])
	}

	return (
		<div className="wrapper clear">
			{isCartOpened && <Overlay items={cartItems} onClose={() => setIsCartOpened(false)}/>}
			<Header onClickCart={() => setIsCartOpened(true)}/>

			<div className="content p-40">
				<div className="d-flex justify-between align-center mb-40">
					<h2 className="">Все кроссовки</h2>
					<div className="search">
						<img src="/img/search.svg" alt="search" />
						<input placeholder="Поиск" type="text" />
					</div>
				</div>

				<div className="sneakers_wrapper d-flex justify-between flex-wrap">
					{
						items.map(item =>
							<Card
								id={item.id}
								name={item.name}
								price={item.price}
								path={item.path}
								key={item.id}
								onPlus={obj => onAddToCart(obj)}
							/>
						)
					}
				</div>

			</div>
		</div>
	);
}

export default App;
