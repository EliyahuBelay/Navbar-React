import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
import NavBar from './Components/NavBar/NavBar.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <hr></hr>
      <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
