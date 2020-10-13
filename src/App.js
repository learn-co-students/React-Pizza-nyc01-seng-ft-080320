import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzaURL: "http://localhost:3000/pizzas/",
    pizzas: [],
    pizzaToEdit: []
  }

  fetchPizzas = () => {
    fetch(this.state.pizzaURL)
    .then(resp => resp.json())
    .then(pizzaData => {
      this.setState({pizzas: pizzaData})
    })
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  setEditPizzaForm = (pizza) => {
    this.setState({pizzaToEdit: pizza})
  }

  submitPizzaEditForm = (pizza) => {
    let fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pizza)
    }

    fetch(this.state.pizzaURL+pizza.id, fetchOptions)
    .then(resp => resp.json())
    .then(updatedPizza => this.fetchPizzas())
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.pizzaToEdit} submitPizzaEditForm={this.submitPizzaEditForm}/>
        <PizzaList pizzas={this.state.pizzas} setEditPizzaForm={this.setEditPizzaForm}/>
      </Fragment>
    );
  }
}

export default App;
