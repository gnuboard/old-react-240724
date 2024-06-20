import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <img src={logo} width="100" height="100" alt="logo" />
      <Login />
    </div>
  );
}

export default App;
