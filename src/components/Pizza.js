import React from "react"

const Pizza = (props) => {
  
  const {id, topping, size, vegetarian} = props;

  const getValue= ()=> {
    props.formFiller(id)
  }
  
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td><button type="button" className="btn btn-primary" onClick={getValue}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
