import React from "react"

const Pizza = (props) => {

  const editPizza = () => {
    props.setEditPizzaForm(props.pizza)
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" onClick={editPizza} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
