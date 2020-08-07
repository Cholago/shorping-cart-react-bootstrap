import React from 'react';
import About from './About'
import Navbar from './components/Navbar'
import Listing from './components/Listing'  //listing arrays objects
import Statemanegment from './components/Statemanegment' //managing states
import Counterspersingprops from './components/CountersPersingProps' //Persing props data and props children
import AddItemToArray from './components/AddItemToArray'
import Counters from './components/Counters'
import Swal from 'sweetalert2'

import './App.css';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, itemName: 'Bread', value: 0 },
      { id: 2, itemName: 'Honey', value: 0 },
      { id: 3, itemName: 'Eggs', value: 0 },
      { id: 4, itemName: 'Meat', value: 0 },
      { id: 5, itemName: 'Pizaa', value: 0 },
      { id: 6, itemName: 'Cake', value: 0 }
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
  handleAdd = (itemData) => {
    if (itemData.itemName.length < 2 || itemData.itemName.length < 1) {
      Swal.fire(
        'Error!',
        'Item name or Item id is empty',
        'warning'
      )

    }
    else {
      this.setState(state => {
        const counters = state.counters.concat({ id: itemData.itemID, itemName: itemData.itemName, value: 0 });
        return {
          counters
        };
      });

    }

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
            onDelete={this.handleDelete}
            onAddItem={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );

  }
}
export default App;
