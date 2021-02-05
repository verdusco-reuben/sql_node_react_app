import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { products: [] }

  
  getProducts = _ => {
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data }))
    .catch(err => console.error(err))
  };

  componentDidMount(){
    console.log(this.getProducts())
    this.getProducts();
  }
  // console.log(this.state);

  renderBooks = ({id , Title }) => <div key= {id}>{Title}</div>

  render(){

    const { products } = this.state;

    
    return (
      <div className="App">
        "hi"
        {products.map(this.renderBooks)}
      </div>
    );
  }
}

export default App;
