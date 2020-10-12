import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  renderPizza = () => {
    return this.props.pizzaArray.map(pizza => <Pizza key={pizza.id} clickHandler={this.props.clickHandler} pizza={pizza} />)
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
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
