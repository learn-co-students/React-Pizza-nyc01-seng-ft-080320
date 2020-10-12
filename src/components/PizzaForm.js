import React from "react"

class PizzaForm extends React.Component {
    
    localChangeHandler = (e) => {
        // console.log({[e.target.name]: e.target.value})
        if(e.target.name === "vegetarian"){
            this.props.changeHandler({[e.target.name]: JSON.parse(e.target.value)})
        } else {
            this.props.changeHandler({[e.target.name]: e.target.value})
        }
    }

    submitHandler = (e) =>{
        e.preventDefault()
        this.props.updatePizza()
    }

    render() { 
        return(
            <form className="form-row" 
                onSubmit={this.submitHandler}>
                <div className="col-5">
                    <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" 
                        value={this.props.pizza.topping}
                        onChange={this.localChangeHandler}/>
                </div>
                <div className="col">
                <select value={this.props.pizza.size} name="size" className="form-control" onChange={this.localChangeHandler}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                </div>
                <div className="col">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="vegetarian" value={true} 
                        checked={this.props.pizza.vegetarian === true} 
                        onChange={this.localChangeHandler}/>
                    <label className="form-check-label">
                    Vegetarian
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="vegetarian" value={false} 
                        checked={this.props.pizza.vegetarian === false} 
                        onChange={this.localChangeHandler}/>
                    <label className="form-check-label">
                    Not Vegetarian
                    </label>
                </div>
                </div>
                <div className="col">
                <button type="submit" className="btn btn-success" onClick={this.localSubmitHandler}>Submit</button>
                </div>
            </form>

        )
    }
}

export default PizzaForm
