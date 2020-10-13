import React from "react"

const Pizza = (props) => {
  const {topping, size, vegetarian, id} = props.pizza
  
  //displays if pizza is vegetarian
  function veg(){
    return vegetarian === true ? "yes" : "no"
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{veg()}</td>
      <td><button 
        type="button" 
        className="btn btn-primary" 
        name={"editBtn"} 
        onClick={props.handleClick}
        value={id}
        >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
