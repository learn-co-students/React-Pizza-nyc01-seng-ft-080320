import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderAllPizzas = () => {
    return this.props.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} prepareEdit={this.props.prepareEdit}/>)
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
            //render Pizza here
            this.renderAllPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
