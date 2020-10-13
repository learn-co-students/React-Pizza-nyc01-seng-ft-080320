import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  state = {
    pizzas: []
  }

  mapPizzas = () => {
    return this.state.pizzas.map(pizza => { return <Pizza key={pizza.id} appDeletePizza={this.appDeletePizza} editPizza={this.props.editPizza} pizza={pizza} /> })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(json => this.setState({pizzas: json}))
  }

  componentDidUpdate(prevProps) {
    // avoid infinite loops by checking if updatedPizza has in fact changed
    if (this.props.updatedPizza !== prevProps.updatedPizza) {
      const updatedPizza = this.props.updatedPizza;
      const headers = {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      };
      // if this is an edit scenario
      if (!!updatedPizza.id) {
        fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`, {
          method: "PATCH",
          headers: headers, 
          body: JSON.stringify(
            updatedPizza
          )
        })
          .then(resp => resp.json())
          .then(json => {
            const pizzaArray = this.state.pizzas.slice();
            const oldPizzaIndex = pizzaArray.findIndex(pizza => { return pizza.id === json.id});
            pizzaArray.splice(oldPizzaIndex, 1, json);
            this.setState({pizzas: pizzaArray});
          });
      } else if (!!updatedPizza.topping && updatedPizza.topping !== '') {
        fetch(`http://localhost:3000/pizzas`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(
            updatedPizza
          )
        })
          .then(resp => resp.json())
          .then(json => {
            this.setState(prev => ({pizzas: [...prev.pizzas, json]}))
          });
      }
    }
  }
  
  appDeletePizza = pizza => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState(prev => ({
          pizzas: prev.pizzas.filter(oldPizza => {return pizza !== oldPizza})
        }))
      })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            this.mapPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
