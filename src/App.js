import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    topping: null,
    size: null,
    vegetarian: null,
    pizzaId: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas/')
      .then(resp => resp.json())
      .then(data => this.setState({ pizzas: data }))
  }

  fillEditPizza = (pizza) => {
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      pizzaId: pizza.id
    })
  }

  changePizzaTopping = (e) => {
    this.setState({ topping: e.target.value })
  }

  changePizzaSize = (e) => {
    this.setState({ size: e.target.value })
  }

  changePizzaVegetarian = (e) => {
    this.setState({ vegetarian: e.target.value })
  }

  // submitPizza = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:3000/pizzas/' + `${this.state.pizzaId}`,
  //     method: "PATCH",
  //     headers: {
  //     "Content-type": "application/json",
  //       "Accepts": "application/json"
  //     }
  //     body: JSON.stringify({
  //       topping: this.state.topping,
  //       size: this.state.size,
  //       vegetarian: this.state.vegetarian
  //     }))
  // }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} changePizzaTopping={this.changePizzaTopping} changePizzaSize={this.changePizzaSize} changePizzaVegetarian={this.changePizzaVegetarian} submitPizza={this.submitPizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.fillEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
