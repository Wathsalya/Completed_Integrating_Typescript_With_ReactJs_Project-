import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Build an app with React+Js & React+Ts
        </p>

   
        <Link to="/page2" >
                  <button type ="submit" class="btn btn-primary">Go to Next Page</button>
        </Link>
   
      </header>
       
     
    </div>
  );
}

export default App;
