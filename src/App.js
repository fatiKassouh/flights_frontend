import './App.css';
import Header from './Header';
import Banner from './Banner';
import Result from './Result';
import { DateRangePicker } from 'react-date-range';


function App() {
  return (
    <div className="App">
      <Header/>      
      {/* <Banner /> */}
      <Result />
    </div>
  );
}

export default App;
