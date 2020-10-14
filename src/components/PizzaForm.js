import React, { Component } from 'react'

export default class PizzaForm extends Component {


  render() {
    const {vegetarian, notVegetarian, topping,} = this.props.editPizza
    // console.log(topping)
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.props.handleClick} name="topping" value={topping}/>
        </div>
        <div className="col">
          <select className="form-control" onChange={this.props.handleClick}>
            <option value="" disabled selected>Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian} onChange={this.props.handleClick}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={notVegetarian} onChange={this.props.handleClick}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.handleClick}>Submit</button>
        </div>
      </div>

  )
  }
  
}



