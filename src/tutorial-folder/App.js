import React from 'react';
import About from './About'
import Navbar from './components/Navbar'
import Listing from './components/Listing'  //listing arrays objects
import Statemanegment from './components/Statemanegment' //managing states
import Counterspersingprops from './components/CountersPersingProps' //Persing props data and props children
import Counters from './components/Counters'


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
