import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state= {
    api: [],
    topping: "",
    size: "",
    vegetarian: '',
    id: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => this.setState({
      api: data
    }))
  }

  editHandle = pizza => {
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      id: pizza.id
    })
  }

  editPizza = (subject, editValue) => {
    if (subject === "vegetarian") {
      this.setState({
        vegetarian: editValue === "Vegetarian" ? true : false
      })
    } else {
      this.setState({
        [subject]: editValue
      })
    }
  }

  submitHandler = () => {
    let options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts : "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    }
    fetch('http://localhost:3000/pizzas/' + this.state.id, options)
    .then(resp => resp.json())
    .then(pizzaObj => {
      let oldObj = this.state.api.find(pizza => pizza.id === pizzaObj.id);
      let index = this.state.api.indexOf(oldObj);
      this.state.api.splice(index, 1, pizzaObj);
      this.setState({
        api: this.state.api,
        topping: "",
        size: "",
        vegetarian: ''
      })
    })

  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler={this.submitHandler} editPizza={this.editPizza} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} />
        <PizzaList clickHandler={this.editHandle} pizzaArray={this.state.api} />
      </Fragment>
    );
  }
}

export default App;
