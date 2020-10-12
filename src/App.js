import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
    state ={
        api: [],
        pizzaToEdit: {},
        // topping: "",
        // size: "",
        // vegetarian: ""
        
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/pizzas')
        .then(resp => resp.json())
        .then(pizzas => {
           this.setState({api: pizzas})
        })
    }

    editPizzaClickHandler = pizzaObj => {
        this.setState({
            pizzaToEdit: pizzaObj,
        })
    }

    toppingChangeHandler = e => {
        this.setState({
            pizzaToEdit:{
                ...this.state.pizzaToEdit,
                topping: e.target.value
            } 
        })
    }

    sizeChangeHandler = e => {
        this.setState({
            pizzaToEdit:{
                ...this.state.pizzaToEdit,
                size: e.target.value
            } 
        })
    }

    vegChangeHandler = e => {
        console.log(e.target.value)
        console.log(this.state.pizzaToEdit)
        if(e.target.value === "Not Vegetarian"){
            this.setState({
                pizzaToEdit:{
                    ...this.state.pizzaToEdit,
                    vegetarian: false
                }
            })
        
        } else if(e.target.value === "Vegetarian"){
            this.setState({
                pizzaToEdit:{
                    ...this.state.pizzaToEdit,
                    vegetarian: true
                }
            })
        }
    }

    formSubmitHandler = () => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application.json"
            },
            body: JSON.stringify(this.state.pizzaToEdit)
        }

        fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`, options)
        .then(resp => resp.json())
        .then(newPizza => {
            const newArr = [...this.state.api]
            const oldPizza = newArr.find(pizza => pizza.id === newPizza.id)
            const index = newArr.indexOf(oldPizza)
            newArr[index] = newPizza
            this.setState({
                api: newArr,
                pizzaToEdit: {}
            })
        })


        //patch request to this object in db
        //send back changedObj
        //find old obj in api and swap with this newly edited pizza obj, reset pizzatoedit as {}
    }

  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler={this.formSubmitHandler} vegChangeHandler={this.vegChangeHandler}sizeChangeHandler={this.sizeChangeHandler}toppingChangeHandler={this.toppingChangeHandler}pizza={this.state.pizzaToEdit}/>
        <PizzaList clickHandler={this.editPizzaClickHandler}pizzas={this.state.api}/>
      </Fragment>
    );
  }
}

export default App;
