import React from 'react';
import About from './About'
import Navbar from './components/Navbar'
import Listing from './components/Listing'  //listing arrays objects
import Statemanegment from './components/Statemanegment' //managing states
import Counterspersingprops from './components/CountersPersingProps' //Persing props data and props children
import AddItemToArray from './components/AddItemToArray'
import Counters from './components/Counters'

import './App.css';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, itemName: 'Bread', value: 0 },
      { id: 2, itemName: 'Honey', value: 0 },
    ]
  }

  handleDelete = (counterId) => {
    console.log('Event handle clicked ' + counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = counter => {
    //only decrement if value is not equal to zerro
    if (!counter.value == 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });

    }

  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  //adding an item to the list
  handleAdd = (itemData) => {

    this.setState(state => {
      const counters = state.counters.concat({ id: itemData.itemId, itemName: itemData.itemName, value: 0 });
      return {
        counters
      };
    });

    console.log(itemData);

  }

  render() {
    return (
      <React.Fragment>
        <Navbar tatolCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAddItem={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );

  }
}
export default App;
