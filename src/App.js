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
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
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

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  //adding an item to the list
  handleAdd = () => {
    console.log("Item added");
    this.setState(state => {
      const counters = state.counters.concat({ id: 7, value: 20 });
      return {
        counters
      };
    });
    console.log(this.state.counters);

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
            onDelete={this.handleDelete}
            onAddItem={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );

  }
}
export default App;
