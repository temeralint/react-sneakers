function App() {
  return (
	<div className="wrapper clear">
		<div className="overlay">
			<div className="basket d-flex flex-column">
				<h2 className="mb-30">Корзина</h2>

				<div className="basket_items">
					<div className="basket_item d-flex justify-between align-center mb-20">
						<div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} className="basket_item_img"></div>
						<div className="mr-10">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<button className="btn opacity-5">
							<img src="/img/delete.svg" alt="close" />
						</button>
					</div>

					<div className="basket_item d-flex justify-between align-center">
						<div style={{backgroundImage: 'url(/img/sneakers/3.jpg)'}} className="basket_item_img"></div>
						<div className="mr-10">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<button className="btn opacity-5">
							<img src="/img/delete.svg" alt="close" />
						</button>
					</div>
				</div>

				<div className="basket_total">
					<ul>
						<li>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li>
							<span>Налог 5%:</span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button>Оформить заказ</button>
				</div>
			</div>
		</div>

		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} src="/img/logo.png" alt="logo"/>
				<div className="ml-15">
					<h1 className="text-uppercase">React sneakers</h1>
					<p className="opacity-5">Магазин лучших кроссовок</p>
				</div>
			</div>

			<div>
				<ul className="d-flex">
					<li className="mr-30">
						<img width={18} height={18} src="/img/cart.svg" alt="cart" />
						<span> 1205р.</span>
					</li>
					<li className="mr-30">
						<img width={18} height={18} src="/img/favorite.svg" alt="favorites" />
					</li>
					<li className="mr-30">
						<img width={18} height={18} src="/img/profile.svg" alt="profile" />
					</li>
				</ul>
			</div>
		</header>

		<div className="content p-40">
			<div className="d-flex justify-between align-center mb-40">
				<h2 className="">Все кроссовки</h2>
				<div className="search">
					<img src="/img/search.svg" alt="search" />
					<input placeholder="Поиск" type="text" />
				</div>
			</div>
			
			<div className="sneakers_wrapper d-flex justify-between">
				<div className="card">
					<button className="btn favorite">
						<img src="/img/heart-unliked.svg" alt="heart" />
					</button>
					<img width={133} height={112} src="/img/sneakers/1.jpg" alt="nike blazer green"/>
					<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
					<div className="d-flex justify-between align-center mt-15">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 990руб.</b>
						</div>
						<button className="btn">
							<img width={11} height={11} src="/img/card-button-plus.svg" alt="card-plus"/>
						</button>
					</div>
				</div>

				<div className="card">
					<button className="btn favorite active">
						<img src="/img/heart-liked.svg" alt="heart" />
					</button>
					<img width={133} height={112} src="/img/sneakers/2.jpg" alt="nike blazer green"/>
					<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
					<div className="d-flex justify-between align-center mt-15">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 990руб.</b>
						</div>
						<button className="btn">
							<img width={11} height={11} src="/img/card-button-plus.svg" alt="card-plus"/>
						</button>
					</div>
				</div>

				<div className="card">
					<button className="btn favorite active">
						<img src="/img/heart-liked.svg" alt="heart" />
					</button>
					<img width={133} height={112} src="/img/sneakers/3.jpg" alt="nike blazer green"/>
					<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
					<div className="d-flex justify-between align-center mt-15">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 990руб.</b>
						</div>
						<button className="btn">
							<img width={11} height={11} src="/img/card-button-plus.svg" alt="card-plus"/>
						</button>
					</div>
				</div>

				<div className="card">
					<button className="btn favorite">
						<img src="/img/heart-unliked.png" alt="heart" />
					</button>
					<img width={133} height={112} src="/img/sneakers/4.jpg" alt="nike blazer green"/>
					<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
					<div className="d-flex justify-between align-center mt-15">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 990руб.</b>
						</div>
						<button className="btn">
							<img width={11} height={11} src="/img/card-button-plus.svg" alt="card-plus"/>
						</button>
					</div>
				</div>
			</div>

		</div>
	</div>
  );
}

export default App;
