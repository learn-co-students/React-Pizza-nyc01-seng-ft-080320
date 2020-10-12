import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    topping: '',
    size: '',
    vegetarian: '',
    pizzaId: ''
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
    this.setState({ topping: e })
  }

  changePizzaSize = (e) => {
    this.setState({ size: e })
  }

  changePizzaVegetarian = (e) => {
    if (e === "false") {
      this.setState({ vegetarian: false })
    } else {
      this.setState({ vegetarian: true })
    }
  }

  submitPizza = (e) => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(resp => resp.json())
    .then(data => this.componentDidMount())
    .then(this.setState({
        topping: '',
        size: '',
        vegetarian: '',
        pizzaId: ''
    }))
  }

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
