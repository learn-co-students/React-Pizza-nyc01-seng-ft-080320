import React from "react"

const Pizza = (props) => {
  const {topping, size, vegetarian} = props.pizza
  
  //displays if pizza is vegetarian
  function veg(){
    return vegetarian === true ? "yes" : "no"
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{veg()}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
