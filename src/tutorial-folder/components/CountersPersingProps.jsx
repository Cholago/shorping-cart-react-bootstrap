import React from 'react';
import Counter from './CounterRecievingProp'

//rendering all counters from Counter components
class Counters extends React.Component {
    //set counter id and value
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
    render() {
        //persing props to a components
        //with props child id  <h>Count {counter.id}</h>
        //child prop is very useful when youre passing complex elememnt like dialogbox
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} value={counter.value}>
                        <h4>Count {counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;