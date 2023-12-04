import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home_p/home';
import Menu from './pages/menu_p/menu';
<<<<<<< Updated upstream
import CheckOut from './pages/checkout_p/checkout';
=======
import Routing from './router/router';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      {<Layout children={<Home/>}/>};
      {<Layout children={<Menu/>}/>};
      {<Layout children={<CheckOut/>}/>};
=======
      <Routing/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
