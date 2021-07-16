import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Nav from './components/Navbar/Nav';
import Home from './components/pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>

      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/pr-intern' component={PrIntern} /> */}

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
