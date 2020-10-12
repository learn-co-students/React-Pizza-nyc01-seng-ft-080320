import React from "react"

class PizzaForm extends React.Component {
  
submitHandler = (e) => {
  e.preventDefault()
this.props.submitHandler(this.props.pizza)
}


  render() {
  return(
    <form onSubmit={this.submitHandler}>
      <div className="form-row">
        <div className="col-5">
            <input onChange={this.props.pizzaToppingChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value=
                {this.props.pizza.topping}

              />
        </div>
        <div className="col">
          <select onChange={this.props.pizzaSizeChange} name="size" value={this.props.pizza.size} className="form-control">
            <option value={"Small"}>Small</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Large"}>Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check" >
            <input className="form-check-input"  name="vegetarian" onChange={this.props.vegetarianClick}type="radio" value={true} checked={this.props.pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"  name="vegetarian" onChange={this.props.nonVegetarianClick}type="radio" value={false} checked={!this.props.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button  type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>
    </form>
  )
  }
}

export default PizzaForm
