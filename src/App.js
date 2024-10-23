
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import Pound from './components/Pound';
import USD from './components/USD';

function App() {
  return (
    <div className="App">
      <CurrencyConverter 
        render={(amount)=>{
          return(
            <>
              <USD amount={amount} />
              <Pound amount={amount} />
            </>
          )
        }}
      />
    </div>
  );
}

export default App;
