import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    pizzaId: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  editHandler = (pizza) => {
    this.setState({
      pizzaId: pizza.id, 
      topping: pizza.topping,
      size: pizza.size, 
      vegetarian: pizza.vegetarian
    })
  }

  changeHandler = event => {
    event.target.name === "vegetarian" ? this.setState({vegetarian: !this.state.vegetarian}) : this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = () => {
    fetch('http://localhost:3000/pizzas/' + this.state.pizzaId, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })})
      .then(response => response.json())
      .then(editedPizza => {
        let thisPizza = this.state.pizzas.find(pizza => pizza.id === editedPizza.id )
        let index = this.state.pizzas.indexOf(thisPizza)
        this.state.pizzas.splice(index, 1, editedPizza)
        this.setState({
          pizzaId: "",
          topping: "",
          size: "",
          vegetarian: ""
        })
      })
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaId={this.state.pizzaId} pizzaTopping={this.state.topping}  pizzaSize={this.state.size} pizzaVeg={this.state.vegetarian} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} editHandler={this.editHandler}/>
      </Fragment>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(pizzasObj => {
      this.setState({
        pizzas: pizzasObj
      })
    })
  }

}

export default App;
