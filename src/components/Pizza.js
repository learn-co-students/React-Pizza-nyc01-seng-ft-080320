import React from "react"

const Pizza = ({pizza, editPizza, appDeletePizza}) => {
  const edit = () => {
    editPizza(pizza)
  }

  const deletePizza = () => {
    appDeletePizza(pizza)
  }

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" onClick={edit} className="btn btn-primary">Edit Pizza</button></td>
      <td><button type="button" onClick={deletePizza} className="btn btn-danger">Delete Pizza</button></td>
    </tr>
  )
}

export default Pizza
