import React from "react"

const PizzaForm = props => {

  const editForm = event => {
    props.editPizza(event.target.name, event.target.value)
  }
  
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" name="topping" onChange={editForm} placeholder="Pizza Topping" value={
                  //Pizza Topping Should Go Here
                  // this.props.formValues ? this.props.formValues.topping : this.state.topping
                  props.topping
                }/>
          </div>
          <div className="col">
            <select value={props.size} name="size" onChange={editForm} className="form-control">
              {/* this.props.formValues ? this.props.formValues.size : this.state.size */}
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" onChange={editForm} checked={props.vegetarian ? true : false}/>
              {/* this.props.formValues ? this.props.formValues.vegetarian ? true : false : this.state.vegetarian === "Vegetarian" ? true : false */}
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" onChange={editForm} checked={props.vegetarian ? false : true}/>
              {/* this.props.formValues ? !this.props.formValues.vegetarian ? true : false : this.state.vegetarian === "Not Vegetarian" ? true : false */}
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={props.submitHandler}>Submit</button>
          </div>
        </div>

    )
  }


export default PizzaForm
