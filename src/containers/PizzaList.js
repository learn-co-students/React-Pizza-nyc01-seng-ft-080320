import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizzas = () => {
    return this.props.pizzas.map(el => <Pizza key={el.id} pizza={el} renderEditForm={this.props.renderEditForm}/>)
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
            this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
