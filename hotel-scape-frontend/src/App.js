// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Hotel from './Hotel.js';
import CreateHotel from './CreateHotel';
import HotelNavbar from './HotelNavbar';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div>
        <HotelNavbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hotels/new">
            <CreateHotel />
          </Route>
          <Route exact path="/hotels/:slug">
           <Hotel />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
