import React from "react"

class PizzaForm extends React.Component{

  state={
    topping:'',
    size:'',
    vegetarian:'', 
    id:''
  }

  componentDidUpdate=(previousProps, previousState)=>{
    if(previousProps.pizza !== this.props.pizza){
      this.setState({topping:this.props.pizza.topping, size: this.props.pizza.size, vegetarian: this.props.pizza.vegetarian, id:this.props.pizza.id})
    }
  }
 
  updateState = (e) =>{
    if (e.target.value ==="Vegetarian"){
      this.setState({vegetarian: true})
    } else if (e.target.value ==="Not Vegetarian") {
      this.setState({vegetarian: false})
    } else {
    this.setState({[e.target.name]:[e.target.value]})
    }
  }

  // vegetarianStateCheck = () =>{
    
  //   if(this.state.vegetarian=== true){
  //     return true
  //   }
   
  // }

  // notVegetarian =()=>{
    
  //   if(this.state.vegetarian=== false){
  //     return true
  //   }
   
  // }

  getPatchInfo = () =>{
    console.log('get patch')
    let pizzaObj= this.state
    this.props.patcher(pizzaObj)
    this.setState({
      topping:'',
      size:'',
      vegetarian:'',
      id:''
    })
    
  }


  render(){

  

    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} name="topping" onChange={this.updateState} />
        </div>
        <div className="col">
          <select value={this.state.size} className="form-control" name="size" onChange={this.updateState}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="Vegetarian" checked={this.state.vegetarian===true} onChange={this.updateState}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="Not Vegetarian" checked={this.state.vegetarian===false} onChange={this.updateState}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.getPatchInfo}>Submit</button>
        </div>
      </div>
    )

  }

   
  
}


export default PizzaForm
