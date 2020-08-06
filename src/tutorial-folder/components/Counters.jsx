import React from 'react';
import Counter from './Counter'

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

    render() {
        //persing props to a components
        //with props child id  <h>Count {counter.id}</h>
        //child prop is very useful when youre passing complex elememnt like dialogbox
        return (
            <div>
                <button className="btn btn-primary btn-sm m-3" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}>
                        <h4> Count {counter.id} </h4>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;