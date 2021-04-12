import logo from './logo.svg';
import './App.css';
import Footer from "./Components/footer";
import Section from "./Components/main";
import Header from "./Components/header";
import {
    BrowserRouter as Router, Link,
    Switch,
    useLocation,
    Route, Redirect
} from "react-router-dom";
import About from "./Components/about";
import Test from "./Components/Test";
import React from "react";
import Events from "./Components/events";
import Event_detail from "./Components/event_detail";
import Treners from "./Components/treners";
import Contacts from "./Components/contacts";
import Forms from "./Components/forms";
function App() {
  return (
<div>
 <Header/>

                      <Router>
                          <Switch>
                            <Link exact path = "/" component={Section} />
                              <Link exact path = "/about" component={About} />
                               <Link exact path = "/events" component={Events} />
                              <Link exact path = "/event" component={Event_detail} />
                                <Link exact path = "/treners" component={Treners} />
                                          <Link exact path = "/contacts" component={Contacts} />
                            <Link exact path = "/forms" component={Forms} />


                          </Switch>
                      </Router>

    <Footer/>
</div>
  );
}

export default App;
