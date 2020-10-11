import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const Base_Url = 'http://localhost:3000/pizzas/'

class App extends Component {

  state = {
    pizzas: [],
    topping: "",
    size: "",
    vegetarian: "",
    pizzaId: ""
  }

  componentDidMount = () => {
    fetch(Base_Url)
    .then(resp => resp.json())
    .then(pizzaData => {
      this.setState({
        pizzas: pizzaData
      })
    })
  }

  renderEditForm = (pizzaObj) => {
    this.setState({
      pizzaId: pizzaObj.id,
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian
    })
  }

  editPizza = (subject, editValue) => {
    if(subject === 'vegetarian'){
      this.setState(prevState => { return {
        vegetarian: !prevState.vegetarian
      }
      })
    }else {
      this.setState({
        [subject]: editValue
      })
    }
  }

  savePizza = (topping, size, vegetarian) => {

    this.setState({
      topping: "",
      size: "",
      vegetarian: ""
    })

    let updatedPizza = {
      topping: topping,
      size: size,
      vegetarian: vegetarian
    }

    let options = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    }

    fetch(Base_Url + this.state.pizzaId, options)
    .then(resp => resp.json())
    .then(savedPizza => this.componentDidMount())
    .catch(console.log())
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm savePizza={this.savePizza} editPizza={this.editPizza} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian}/>
        <PizzaList renderEditForm={this.renderEditForm} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
