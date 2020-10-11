import React from "react"

const PizzaForm = (props) => {

  function editPizza(e) {
    props.editPizza(e.target.name, e.target.value)
  }

  function savePizza() {
    props.savePizza(props.topping, props.size, props.vegetarian)
    
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={editPizza} type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                props.topping
              }/>
        </div>
        <div className="col">
          <select onChange={editPizza} name="size" value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={editPizza} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={props.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={editPizza} name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={props.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={savePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
