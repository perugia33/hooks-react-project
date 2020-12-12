
import CounterComponent from './Components/CounterComponent'
import './App.css';

function App() {
  return (
    <div>
      <h1 className= "header">Namaste Tea Inventory</h1>
      <CounterComponent item = "Twinnings Chamomile" count = {90}  increment = {1}/>
      <CounterComponent item = "Margaret Hope's Estate Darjeeling" count = {200}  increment= {2}/>
      <CounterComponent item = "Monabarie Assam" count = {50}  increment = {4}/>
      <CounterComponent item = "Jungpana Estate 2nd Flush" count = {75}  increment = {3}/>
    </div>
  );
}


export default App;
