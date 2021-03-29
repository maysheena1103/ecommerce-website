import React, { component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Product } from "./Product";
import { Checkout } from "./Checkout";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch"; 
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/Product" component={Product}></Route>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </Layout>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
