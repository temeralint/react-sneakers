import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

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
				<Card/>
				<Card/>
				<Card/>
				<Card/>	
			</div>

		</div>
	</div>
  );
}

export default App;
