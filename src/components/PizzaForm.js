import React from "react"

class PizzaForm extends React.Component{
  state = {
    id: "",
    topping: "",
    vegetarian: "",
    size: ""
  }
  veg = (e) => {
    let value = true
    if (e.target.value === "false"){
      value = false
    }
    this.setState({vegetarian: value})
  }
  componentDidUpdate = (previousProps, previousState) => {
    if (previousProps.pizza !== this.props.pizza) {
      let current = this.props.pizza
      this.setState({
        id: current.id,
        topping: current.topping,
        vegetarian: current.vegetarian,
        size: current.size
      })
      
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e, pizza) => {
    this.props.submitPizza(e, pizza)
    this.setState({
      id: "",
      topping: "",
      vegetarian: "",
      size: ""
    })
  }
  render(){
  return(
  
    <form onSubmit={(e) => this.submitHandler(e, this.state)}>   
    {console.log(this.state)}
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={
                this.state.topping
              } onChange={this.handleChange}/>
        </div>
        <div className="col">
          <select value={this.state.size} name="size" className="form-control" onChange={this.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" onChange={this.veg} value={true} checked={this.state.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" onChange={this.veg} value={false} checked={!this.state.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
  )}
}

export default PizzaForm
