import React from "react"

class PizzaForm extends React.Component {
  state={
    id:"",
    topping:"",
    size:"",
    vegetarian:false,
  }
  

  handleInputChange = e =>{
    console.log("inside handle input", e.target.name, e.target.value)
    if(e.target.name==="vegetarian"){
      this.setState({
        [e.target.name]: e.target.value==="Vegetarian"? true : false,
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    console.log(this.state);
  }

  clickHandler = () => {
    this.props.updatePizza(this.state);
  }
  componentDidUpdate(prevProps){
    if(prevProps.pizza !== this.props.pizza)
      this.setState({
        id: this.props.pizza.id,
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        vegetarian: this.props.pizza.vegetarian,
      })
  }

  render(){
    console.log("rendering form with state:",this.state," and props ", this.props)
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.handleInputChange}/>
          </div>
          <div className="col">
            <select name="size" value={this.state.size} onChange={this.handleInputChange} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={this.state.vegetarian} onChange={this.handleInputChange}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={!this.state.vegetarian} onChange={this.handleInputChange}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={e => this.clickHandler()}>Submit</button>
          </div>
        </div>
      )
    }
}

export default PizzaForm
