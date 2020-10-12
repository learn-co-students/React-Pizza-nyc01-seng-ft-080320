import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    api : [],
    pizza: {
        id : "",
        topping : "",
        size: "",
        vegetarian: ""
    }

  }

pizzaToppingChange = (e) => {
  let target = e.target 
  this.setState(prevState => {
   return { pizza: {...prevState.pizza,[target.name] : target.value}}
  })
}

pizzaSizeChange = (e) => {
  let target = e.target
  this.setState(prevState => {
    return {pizza: {...prevState.pizza, [target.name] : target.value}}
  })

}

vegetarianClick = (e) => {
  let target = e.target
  this.setState(prevState => {
    return {pizza: {...prevState.pizza, [target.name] : target.value}}
  })

}

nonVegetarianClick = (e) => {
  let target = e.target
  this.setState(prevState => {
    return {pizza: {...prevState.pizza, [target.name] : target.value}}
  })
  
}

submitHandler = (pizza) => {
  console.log("submitting", pizza)
  
  fetch(`http://localhost:3000/pizzas + ${pizza.id}`, {
    Method: "PATCH", 
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    }
  })
  .then(resp => resp.json())
  .then(updatedPizza => {
    let newArray = [...this.state.pizza, updatedPizza]
    this.setState({pizza : newArray})
  })

}

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(data => {
      this.setState({api : data})
    })
  }
  
  editPizzaClick = (pizzaObj) => {  
   this.setState({ pizza : {
    id: pizzaObj.id,
    topping : pizzaObj.topping,
    size : pizzaObj.size,
    vegetarian : pizzaObj.vegetarian
   }
   })
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler={this.submitHandler} pizza={this.state.pizza} pizzaToppingChange={this.pizzaToppingChange} pizzaSizeChange={this.pizzaSizeChange} vegetarianClick={this.vegetarianClick} nonVegetarianClick={this.nonVegetarianClick}/>
        <PizzaList pizzas={this.state.api} clickHandler={this.editPizzaClick} />
      </Fragment>
    );
  }
}

export default App;
