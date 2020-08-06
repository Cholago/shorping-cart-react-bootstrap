import React from 'react';
import Counter from './Counter'

//rendering all counters from Counter components
class Counters extends React.Component {
    //set counter id and value


    render() {
        //persing props to a components
        //with props child id  <h>Count {counter.id}</h>
        //child prop is very useful when youre passing complex elememnt like dialogbox
        return (
            <div className="card m-3" style={{ width: "20rem" }}>
                <div className="card-header">
                    <button
                        className="btn btn-primary btn-sm m-3"
                        onClick={this.props.onReset}>
                        Reset
                    </button>
                </div>
                <ul className="list-group list-group-flush">
                    {this.props.counters.map(counter => (
                        <li className="list-group-item">
                            <Counter
                                key={counter.id}
                                counter={counter}
                                onDelete={this.props.onDelete}
                                onIncrement={this.props.onIncrement}>
                                <h4 className="text-center">Item {counter.id} </h4>
                            </Counter>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Counters;