import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PrIntern from './components/pages/PrIntern';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/pages/Register';
import Domain from './components/Domain/Domain'

function App() {
  return (
    <Router>


      <Switch>
        {/* <Header /> */}
        <Route exact path='/' component={Header} />
        <Route exact path='/pr-intern' component={PrIntern} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/domain' component={Domain}/>

      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
