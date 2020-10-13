import React, { useState, useEffect } from "react"

const PizzaForm = ({editing, appHandleSubmit}) => {
  const [pizza, setPizza] = useState(editing);

  useEffect(() => {
    setPizza(editing)
  }, [editing])

  const handleChange = event => {
    if (!event.target.name.includes('vegetarian')) {
      setPizza({...pizza, [event.target.name]: event.target.value})
    } else {
      setPizza({...pizza, vegetarian: event.target.value === 'Vegetarian' ? true : false})
    }
  }

  const handleSubmit = () => {
    // if there's an id, meaning we're editing the pizza, 
    // or if no id but there's a topping, meaning we're adding a new pizza
    if (!!pizza.id || pizza.topping !== '') {
      appHandleSubmit(pizza);
      setPizza({topping: '', size: '', vegetarian: true})
    }
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={handleChange} name="topping" className="form-control" placeholder="Pizza Topping" value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizza.size} onChange={handleChange} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange} name="vegetarian" type="radio" value="Vegetarian" checked={pizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange} name="vegetarian" type="radio" value="Not Vegetarian" checked={pizza.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
