import './App.css';
import Coffee from './components/Coffee';
import {cappuccino, latte} from './data/props';

function App() {
  return (
    <div className="App">
      <h1>Our Coffees</h1>
      <Coffee
        name={cappuccino.name}
        price={cappuccino.price}
        milk={cappuccino.milk}
        img={cappuccino.img}
      />
      <Coffee
        name={latte.name}
        price={latte.price}
        milk={latte.milk}
        img={latte.img}
      />
     
    </div>
  );
}

export default App;
