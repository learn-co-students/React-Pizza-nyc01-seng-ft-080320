import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    editing: {
      topping: '',
      size: 'Small',
      vegetarian: true
    },
    updatedPizza: {}
  }

  editPizza = pizza => {
    this.setState({editing: pizza})
  }

  appHandleSubmit = pizza => {
    // updated pizza has an id if editing, no id if new pizza
    this.setState({updatedPizza: pizza})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm appHandleSubmit={this.appHandleSubmit} editing={this.state.editing} />
        <PizzaList updatedPizza={this.state.updatedPizza} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
