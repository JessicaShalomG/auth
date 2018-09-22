import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home1 from "./home1.js";
import Footer from "./components/item-page/fotter.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import UploadProduct from "./components/UploadProducts.jsx";//client/src/components/UploadProduct.jsx
import Error from "./components/item-page/error.js";
import Navigation from "./components/item-page/navigation.js";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home1} />
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/Upload" component={UploadProduct} />
            <Route  component={Error} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      );
    }
  }

  export default App;
