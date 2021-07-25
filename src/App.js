import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import SignUp from './pages/SignUp/SignUp';
import PrIntern from './pages/PrIntern';
import Register from './pages/Register';
import Domain from './pages/Domain';
import Workshop from './pages/Workshop';
import AboutUs from './pages/AboutUs';
import Sponsor from './pages/Sponsor';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
=======
import Home from './components/pages/Home';
import PrIntern from './components/pages/PrIntern';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/pages/Register';
import Domain from './components/Domain/Domain'
>>>>>>> 52f9e7096fd49bfb424241d101b1377d03820c20

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/pr-intern' component={PrIntern} />
        <Route exact path='/register' component={Register} />
<<<<<<< HEAD
        <Route exact path='/domain' component={Domain} />
        <Route exact path='/workshop' component={Workshop} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/sponsors' component={Sponsor} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route exact path='/' component={Home} />
=======
        <Route exact path='/domain' component={Domain}/>

>>>>>>> 52f9e7096fd49bfb424241d101b1377d03820c20
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
