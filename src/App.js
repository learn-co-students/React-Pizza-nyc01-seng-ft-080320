import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const APIURL = 'http://localhost:3000/pizzas/'

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
        id:'',
      }
    }
  }

  handleClick = (event) => {
    if(event.target.type === 'submit'){
      this.updatePizza()
    }

    switch (event.target.name) {
      case "topping":
        this.setState({
          editPizza:{
            ...this.state.editPizza,
            topping: event.target.value,
          }
        })
        break;
      case "editBtn":
        this.setState({
          editPizza:{
            ...this.state.editPizza,
            id: event.target.value
          }
        })
        break;
      default:
        break;
    }


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
      case "Small": case "Medium": case "Large":
        this.setState({      
          editPizza:{
            ...this.state.editPizza,
            size: event.target.value
          }
        })
        break;
      case "":
      default:
        break;
    }
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handleClick={this.handleClick}
          editPizza={this.state.editPizza}
        />
        <PizzaList pizzas={this.state.api} handleClick={this.handleClick}/>
      </Fragment>
    );
  }

  updatePizza = () => {
    const newData = this.state.editPizza
    const options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    }

    fetch((APIURL + newData.id), options)
      .then(res => res.json())
      .then(data => this.updateAPI(data))
  }  
  
  updateAPI = (data) => {
    let apiData = this.state.api
    let info = apiData.findIndex((pizza) => pizza.id === data.id)
    
    apiData.splice(info, 1, data)
    
    this.setState({
      api: apiData
    })
  }
  

  componentDidMount() {
    fetch(APIURL)
      .then(res => res.json())
      .then((api) => this.setState({api}))
  }

}

export default App;
