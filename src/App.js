function App() {
  return (
	<div className="wrapper clear">
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
			<h2 className="mb-40">Все кроссовки</h2>
			
			<div className="sneakers_wrapper d-flex justify-between">
				<div className="card">
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
