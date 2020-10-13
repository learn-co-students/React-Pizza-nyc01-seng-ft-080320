import React from "react"

const PizzaForm = (pizza) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={pizza.pizzaTopping} onChange={event => pizza.changeHandler(event)}/>
        </div>
        <div className="col">
          <select value={pizza.pizzaSize} name="size" className="form-control" onChange={event => pizza.changeHandler(event)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" checked={pizza.pizzaVeg ? true : false} onChange={event => pizza.changeHandler(event)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Not Vegetarian" checked={pizza.pizzaVeg ? false : true} onChange={event => pizza.changeHandler(event)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={pizza.submitHandler}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
