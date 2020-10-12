import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
class App extends Component {
	state = {
		api: [],
		pizzaToEdit: {
            topping: "",
            size: "",
            vegetarian: null
        }
	};

	componentDidMount = () => {
		fetch('http://localhost:3000/pizzas').then((resp) => resp.json()).then((pizzas) => {
			this.setState({ api: pizzas });
		});
	};

	editPizzaClickHandler = (pizzaObj) => {
		this.setState({
			pizzaToEdit: pizzaObj
		});
    };
    
    editChangeHandler = (e) => {
		if (e.target.value === 'Vegetarian') {
			this.setState({
				pizzaToEdit: {
					...this.state.pizzaToEdit,
					vegetarian: true
				}
			});
		} else if (e.target.value === 'Not Vegetarian') {
			this.setState({
				pizzaToEdit: {
					...this.state.pizzaToEdit,
					vegetarian: false
				}
			});
		} else (
            this.setState({
                pizzaToEdit:{
                    ...this.state.pizzaToEdit,
                    [e.target.name]: e.target.value}
            })
        )
	};

	// toppingChangeHandler = (e) => {
	// 	this.setState({
	// 		pizzaToEdit: {
	// 			...this.state.pizzaToEdit,
	// 			topping: e.target.value
	// 		}
	// 	});
	// };

	// sizeChangeHandler = (e) => {
	// 	this.setState({
	// 		pizzaToEdit: {
	// 			...this.state.pizzaToEdit,
	// 			size: e.target.value
	// 		}
	// 	});
	// };

	// vegChangeHandler = (e) => {
	// 	if (e.target.value === 'Not Vegetarian') {
	// 		this.setState({
	// 			pizzaToEdit: {
	// 				...this.state.pizzaToEdit,
	// 				vegetarian: false
	// 			}
	// 		});
	// 	} else if (e.target.value === 'Vegetarian') {
	// 		this.setState({
	// 			pizzaToEdit: {
	// 				...this.state.pizzaToEdit,
	// 				vegetarian: true
	// 			}
	// 		});
	// 	}
	// };

	formSubmitHandler = () => {
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application.json'
			},
			body: JSON.stringify(this.state.pizzaToEdit)
		};

		fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`, options)
			.then((resp) => resp.json())
			.then((newPizza) => {
				const newArr = [ ...this.state.api ];
				const oldPizza = newArr.find((pizza) => pizza.id === newPizza.id);
				const index = newArr.indexOf(oldPizza);
				newArr[index] = newPizza;
				this.setState({
					api: newArr,
					pizzaToEdit: {
                        topping: "",
                        size: "",
                        vegetarian: null
                    }
				});
			});
	};



	render() {
		return (
			<Fragment>
				<Header />
				<PizzaForm
					editChangeHandler={this.editChangeHandler}
					submitHandler={this.formSubmitHandler}
					// vegChangeHandler={this.vegChangeHandler}
					// sizeChangeHandler={this.sizeChangeHandler}
					// toppingChangeHandler={this.toppingChangeHandler}
					pizza={this.state.pizzaToEdit}
				/>
				<PizzaList clickHandler={this.editPizzaClickHandler} pizzas={this.state.api} />
			</Fragment>
		);
	}
}

export default App;
