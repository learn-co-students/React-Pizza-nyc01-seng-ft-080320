import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

// var clonedeep = require('lodash.clonedeep');

const APIURL = 'http://localhost:3000/pizzas'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       api:[],
       editPizza:{
        vegetarian: false,
        notVegetarian: false,
        size:'',
        topping:'',
        }
       }
  }

  handleClick = (event) => {
    if(event.target.name === "topping"){
      return this.setState({topping: event.target.value})
    }

    // clone = clonedeep()
    
    // console.log(event.target.value)
    switch (event.target.value) {
      case "Vegetarian":
        this.setState({
          editPizza:{
            ...this.state.editPizza,
            vegetarian: true,
            notVegetarian: false, 
          }
        })
        break;
      case "Not Vegetarian":
        this.setState({
          editPizza:{
            ...this.state.editPizza,
            vegetarian: false,
            notVegetarian: true,
          }
        })
        break;
      case "Small":
      case "Medium":
      case "Large":
        this.setState({      
          
          
        })
        break;
      case "topping":
        this.setState({topping: event.target.value})
        break
      default:
        break;
    }
  }
  

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handleClick={this.handleClick}
          editPizza={this.state.editPizza}
          vegetarian={this.state.vegetarian}
          notVegetarian={this.state.notVegetarian}
        />
        <PizzaList pizzas={this.state.api}/>
      </Fragment>
    );
  }

  componentDidMount() {
    fetch(APIURL)
      .then(res => res.json())
      .then((api) => this.setState({api}))
  }

}

export default App;
