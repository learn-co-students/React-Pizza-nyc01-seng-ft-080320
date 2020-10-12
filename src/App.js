import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
    state = {
        pizzas: [],
        pizzaToUpdate: {
            id: null,
            topping: '',
            size: '',
            vegetarian: null
        }
    }
    

    componentDidMount = () => {
        fetch('http://localhost:3000/pizzas')
        .then(resp => resp.json())
        .then(data => {
            this.setState({pizzas: data})
        })
    }

    editPizza = (pizzaObj) => {
        this.setState({pizzaToUpdate: pizzaObj})
    }

    changeHandler = (propToUpdate) => {
        this.setState(prevState => {
            return {
                pizzaToUpdate: {...prevState.pizzaToUpdate, ...propToUpdate}
            }
        })
    }

    updatePizza = () => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(this.state.pizzaToUpdate)
        }

        fetch('http://localhost:3000/pizzas/' + this.state.pizzaToUpdate.id, options)
        .then(resp => resp.json())
        .then(pizzaObj => {
            this.updatePizzaList(pizzaObj)
        })

        this.setState({ pizzaToUpdate: {
            id: null,
            topping: '',
            size: '',
            vegetarian: null
        }})
    }

    updatePizzaList = (pizzaObj) => {
        const index = this.state.pizzas.findIndex(pizza => pizza.id === pizzaObj.id)

        const newArray = this.state.pizzas
        newArray.splice(index, 1, pizzaObj)
        this.setState({pizzas: newArray})
    }

    render() {
        return (
        <Fragment>
            <Header/>
            <PizzaForm pizza={this.state.pizzaToUpdate} changeHandler={this.changeHandler} updatePizza={this.updatePizza}/> 
            <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
        </Fragment>
        );
    }
}

export default App;
