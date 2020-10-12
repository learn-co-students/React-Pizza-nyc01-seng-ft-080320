import React from "react"

class Pizza extends React.Component {

  editHandler = () => {
    this.props.clickHandler(this.props.pizza)
  }

  render() {
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian? "Yes" : "No"}</td>
        <td><button onClick={this.editHandler} type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
