import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home_p/home';

function App() {
  return (
    <div className="App">
      <Layout children={<Home/>}/>
    </div>
  );
}

export default App;
