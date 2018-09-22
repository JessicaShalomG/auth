
import React, {Component}from "react";
import axios from "axios";

import SearchBar from "./components/search/SearchBar.js";
import ItemsHome from "./components/ItemsHome.js";


class Home1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      products: undefined,
      product: undefined
    }
    this.setProduct = this.setProduct.bind(this);
    this.handleSubmitToys = this.handleSubmitToys.bind(this);
    this.handleSubmitClothes=this.handleSubmitClothes.bind(this);
    this.handleSubmitBeds=this.handleSubmitBeds.bind(this);
    this.handleSubmitAccesories= this.handleSubmitAccesories.bind(this);
  }

  componentDidMount() {
    axios.get('/items')
    .then(res => {
      const items = res.data;
      this.setState({ items });
    })
  }

 handleSubmitToys(){
   //alert('toys called');
  axios.get('/toys')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

 handleSubmitClothes(){
   //alert('toys called');
  axios.get('/clothes')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }
 handleSubmitBeds(){
   //alert('toys called');
  axios.get('/beds')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

 handleSubmitAccesories(){
   //alert('toys called');
  axios.get('/accesories')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

setProduct(id){
  this.setState({
    product: id
  })
}


render(){
  return(
    <div>
      <center>
        <h1>
          <img src="https://i.imgur.com/hxDOW9A.jpg" title="Una pagina para tus mascotas!" />
          <div>Segunda Pata</div>
        </h1>
        <h2>Vende y Compra Accesorios, para Mascotas.</h2>
        <SearchBar items={this.state.items} handleSubmitToys={this.handleSubmitToys}
        handleSubmitClothes={this.handleSubmitClothes} handleSubmitBeds={this.handleSubmitBeds}
        handleSubmitAccesories={this.handleSubmitAccesories}
        />
        <ItemsHome items={this.state.items} products={this.state.products} setProduct={this.setProduct}/>
      </center>
      <div className="fb-like" data-href="https://github.com/mambo-num-5" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
    </div>
    )
  }
};



export default Home1;
