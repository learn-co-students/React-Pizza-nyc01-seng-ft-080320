import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


renderPizzas = () =>{
  let pizzaArray = this.props.pizzas
  return pizzaArray.map((pizza, index) => <Pizza key={index} {...pizza} formFiller={this.props.formFiller}/>)
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
       
          {this.props.pizzas.length >0?  <tbody>
           {this.renderPizzas()}</tbody> :
           <h2> Loading Pizzas</h2>
          }
        
      </table>
    );
  }

}

export default PizzaList;
