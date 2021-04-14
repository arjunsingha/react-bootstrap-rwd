import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Navbar from '../components/inc/Navbar';
import Footer from '../components/inc/Footer';
import Home from '../components/pages/Home';
import Aboutus from '../components/pages/About';
import Contactus from '../components/pages/Contact';

const SiteRouter = () => {
    return ( 
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <Aboutus />
                </Route>
                <Route path="/contact" exact>
                    <Contactus />
                </Route>
            </Switch>
            <Footer />
        </Router>
     );
}
 
export default SiteRouter;