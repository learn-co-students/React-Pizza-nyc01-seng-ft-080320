import React, { Component } from 'react'

export default class PizzaForm extends Component {

  // handleClick = (event) => {
  //   if(event.target.name === "topping"){
  //     return this.setState({topping: event.target.value})
  //   }

  //   console.log(event.target.value)
  //   switch (event.target.value) {
  //     case "Vegetarian":
  //       this.setState({vegetarian: true,notVegetarian: false,})
  //       break;
  //     case "Not Vegetarian":
  //       this.setState({vegetarian: false,notVegetarian: true,})
  //       break;
  //     case "Small":
  //     case "Medium":
  //     case "Large":
  //       this.setState({size: event.target.value})
  //       break;
  //     case "topping":
  //       this.setState({topping: event.target.value})
  //       break
  //     default:
  //       break;
  //   }
  // }

  render() {
    const {vegetarian, notVegetarian, size, topping} = this.props.editPizza

    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.props.handleClick} name="topping" value={topping}/>
        </div>
        <div className="col">
          <select value={null} className="form-control" onChange={this.props.handleClick}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" onChange={this.props.handleClick}>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={notVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
  }
  
}



