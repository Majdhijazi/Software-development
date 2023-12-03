import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home_p/home';
import Menu from './pages/menu_p/menu';
import CheckOut from './pages/checkout_p/checkout';

function App() {
  return (
    <div className="App">
      {/* <Layout children={<Home/>}/>*/}
      {/*<Layout children={<Menu/>}/>*/}
      {<Layout children={<CheckOut/>}/>}
    </div>
  );
}

export default App;
