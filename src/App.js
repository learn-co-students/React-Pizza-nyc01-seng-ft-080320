import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzaAPI = "http://localhost:3000/pizzas/"
const defaultPizza = {
  id: "",
  topping: "",
  size: "",
  vegetarian: ""
}
class App extends Component {
  state = {
    pizzas: [],
    pizzaToEdit: defaultPizza
  }

  submitPizza = (e, pizza) => {
    e.preventDefault()
    console.log(pizzaAPI + pizza.id)
    let configObj = {
      method: "PATCH",
      headers: {"content-type": "application/json",
    "accepts": "application/json"},
    body: JSON.stringify({topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian})
    }
    fetch(pizzaAPI + pizza.id, configObj)
    .then(resp => resp.json())
    .then(data => {
      let idx = this.state.pizzas.findIndex(pizzaState => pizzaState.id === data.id)
      let newArray = this.state.pizzas
      newArray[idx] = pizza
      this.setState({pizzas: newArray})
    }
    )
    
  }

  componentDidMount = () => {
    fetch(pizzaAPI)
    .then(resp => resp.json())
    .then(pizzas => {
      this.setState({pizzas})
       
    })
  }

  editPizza = (pizza) => {
    return this.setState({pizzaToEdit: pizza})
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaToEdit} submitPizza={this.submitPizza} />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
