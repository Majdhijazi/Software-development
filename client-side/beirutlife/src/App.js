import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home_p/home';
import Menu from './pages/menu_p/menu';
import Routing from './router/router';

function App() {
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
