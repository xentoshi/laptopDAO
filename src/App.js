import './App.css';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
     <CountdownTimer
     countdownTimestampMs={1671818400000}/>
    </div>
  );
}

export default App;