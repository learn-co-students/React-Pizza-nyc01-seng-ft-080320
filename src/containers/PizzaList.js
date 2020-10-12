import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

    filterPizzas = () => {
        const filtered = this.props.pizzas.filter(pizza => {
            return pizza.topping.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        })
        return filtered.map(pizza => {
            return <Pizza clickHandler={this.props.clickHandler} key={pizza.id} pizza={pizza}/>
        })
    }

    // renderPizzas = () => {
    //     return this.props.pizzas.map(pizza => {
    //         return <Pizza clickHandler={this.props.clickHandler} key={pizza.id} pizza={pizza}/>
    //     })
    // }

  render() {
    console.log(this.props.searchTerm)

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
              this.filterPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
