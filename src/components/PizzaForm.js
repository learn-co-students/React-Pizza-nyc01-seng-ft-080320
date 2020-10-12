import React from 'react';

class PizzaForm extends React.Component {
 
	render() {
		return (
			<div className="form-row">
				<div className="col-5">
					<input
						type="text"
						className="form-control"
                        placeholder="Pizza Topping"
                        name="topping"
						value={
							this.props.pizza.topping
                        }
                        onChange={this.props.editChangeHandler}
					/>
				</div>
				<div className="col">
					<select onChange={this.props.editChangeHandler} name="size" value={this.props.pizza.size} className="form-control">
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
					</select>
				</div>
				<div  className="col">
					<div className="form-check">
						<input onChange={this.props.editChangeHandler}name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={this.props.pizza.vegetarian? true : null} />
						<label className="form-check-label">Vegetarian</label>
					</div>
					<div className="form-check">
						<input onChange={this.props.editChangeHandler}name="vegetarian"className="form-check-input" type="radio" value="Not Vegetarian" checked={(this.props.pizza.vegetarian === false)? true : null} />
						<label className="form-check-label">Not Vegetarian</label>
					</div>
				</div>
				<div className="col">
					<button type="submit" className="btn btn-success" onClick={this.props.submitHandler}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default PizzaForm;
