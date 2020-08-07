import React from 'react';
import Counter from './Counter'

//rendering all counters from Counter components
class Counters extends React.Component {
    //set counter id and value

    state = {
        itemName: '',
        itemId: '',
        itemNameError: false,
        itemIdError: false,
        itemNameMessage: '',
        itemIdMessage: ''

    };

    onValueChange = (event) => {
        let { name, value } = event.target;

        switch (name) {
            default:
                break;
        }

    }

    render() {
        //persing props to a components
        //with props child id  <h>Count {counter.id}</h>
        //child prop is very useful when youre passing complex elememnt like dialogbox
        return (
            <div className="row">
                <div className="card m-3 col-md-5 ml-auto mr-auto">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="form-row">
                                    <div class="col-md-6 mb-3 form-group">
                                        <input
                                            type="text"
                                            name="itemName"
                                            value={this.state.itemName}
                                            onChange={this.onValueChange}
                                            class="form-control is-valid"
                                            placeholder="Item name" />
                                        <span class="valid-tooltip">
                                            Item name is required!
                                        </span>
                                    </div>
                                    <div class="col-md-6 mb-3 form-group is-invalid">
                                        <input
                                            type="number"
                                            name="itemId"
                                            value={this.state.itemId}
                                            onChange={this.onValueChange}
                                            class="form-control is-invalid"
                                            placeholder="Item id" />
                                        <span class="invalid-tooltip">
                                            Item id is required!
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <button
                                    className="btn btn-primary btn-sm m-3 float-left"
                                    onClick={this.props.onReset}>
                                    Reset
                                </button>
                                <button
                                    className="btn btn-info btn-sm m-3 float-right"
                                    onClick={this.props.onAddItem}>
                                    Add item
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {this.props.counters.map(counter => (
                                <li className="list-group-item">
                                    <Counter
                                        key={counter.id}
                                        counter={counter}
                                        onDelete={this.props.onDelete}
                                        onIncrement={this.props.onIncrement}>
                                        <h4 className="float-left">Item {counter.id} </h4>
                                    </Counter>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counters;