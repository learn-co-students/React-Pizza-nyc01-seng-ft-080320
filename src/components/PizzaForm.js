import React from "react"

class PizzaForm extends React.Component {

  emptyState = {
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  state={
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  submitPizzaEditForm = (e) => {
    this.props.submitPizzaEditForm(this.state)
    this.setState({...this.emptyState})
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  vegHandler = (e) => {
    let vegetarian = e.target.value === "true" ? true : false
    this.setState({vegetarian})

  }

  //set initial conditions of form.
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pizzaToEdit !== this.props.pizzaToEdit) {
      this.setState({
        id: this.props.pizzaToEdit.id,
        topping: this.props.pizzaToEdit.topping,
        size: this.props.pizzaToEdit.size,
        vegetarian: this.props.pizzaToEdit.vegetarian
      })
    }
  }


  render() {

    return(
      <div className="form-row">
        <div className="col-5">
            <input 
              onChange={this.changeHandler}
              type="text" 
              name="topping" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={this.state.topping}
              />
        </div>
        <div className="col">
          <select name="size" onChange={this.changeHandler} value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={this.vegHandler} name="vegetarian" type="radio" value={true} checked={this.state.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={this.vegHandler} name="vegetarian" type="radio" value={false} checked={!this.state.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.submitPizzaEditForm}>Submit</button>
        </div>
      </div>

  )
  }
}

export default PizzaForm
