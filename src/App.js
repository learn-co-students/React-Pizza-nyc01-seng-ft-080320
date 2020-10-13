import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super();
    this.state = {
      pizzas: [],
      editedPizza: null,
    }
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editedPizza} updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} prepareEdit={this.preparePizzaEdit}/>
      </Fragment>
    );
  }

  preparePizzaEdit = pizza =>{
    console.log(pizza)
    this.setState({editedPizza: pizza});
  }

  updatePizza = pizza => {
    console.log(pizza)
    fetch('http://localhost:3000/pizzas/'+pizza.id,
    {method: 'PATCH',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(pizza)
  }).then(res => res.json())
  .then(json => {
    let pizzas = [...this.state.pizzas];
    let index = pizzas.findIndex(pizza => pizza.id === json.id)
    pizzas[index]=json;
    this.setState({pizzas:pizzas})})
  }
   componentDidMount(){
     fetch('http://localhost:3000/pizzas')
     .then(resp => resp.json())
     .then(pizzas => this.setState({pizzas: pizzas}))
   }
}

export default App;
