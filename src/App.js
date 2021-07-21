// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/MainMenu/Navbar/Nav';
import Home from './pages/Home';
import PrIntern from './pages/PrIntern';
import Register from './pages/Register';
import Domain from './pages/Domain';
import Workshop from './pages/Workshop';
import AboutUs from './pages/AboutUs';
import Sponsor from './pages/Sponsor';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pr-intern' component={PrIntern} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/domain' component={Domain} />
        <Route exact path='/workshop' component={Workshop} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/sponsor' component={Sponsor} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>

  );
}

export default App;
