import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas:'',
    pizza:{

    }
  }
  
  patcher = (pizza) =>{
    console.log('patcher')
    let API = "http://localhost:3000/pizzas/"
    let id = pizza.id
      let options = {
            method:'PATCH',
            headers:{
              'content-type':'application/json',
              'accepts':'application/json'
            },
            body: JSON.stringify(pizza)
      }

      fetch(API + id, options)
      .then(res=>res.json())
      .then(data => this.componentDidMount())
  }

  // reFetch = () => {
  //   console.log('refetch')
  //   let API = "http://localhost:3000/pizzas/"
    
  //   fetch(API)
  //   .then(res=>res.json())
  //   .then(data=> this.setState({pizzas:data}))
  // }



  componentDidMount(){
    let API ="http://localhost:3000/pizzas/"
    fetch(API)
    .then(res=>res.json())
    .then(data=> this.setState({pizzas:data, pizza:{}}))
  }

  formUpdater=(newTopping)=>{
    console.log('form updater')
    console.log(newTopping)
    this.setState({topping:newTopping})
  }

  formFiller = (id) => {
   let pizza = this.state.pizzas.find(element=> element.id === id)
   this.setState({pizza})
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm formUpdater={this.formUpdater} pizza={this.state.pizza} patcher={this.patcher}/>
        <PizzaList pizzas={this.state.pizzas} formFiller={this.formFiller}/>
      </Fragment>
    );
  }
}

export default App;
