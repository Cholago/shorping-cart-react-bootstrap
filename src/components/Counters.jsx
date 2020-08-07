import React from 'react';
import Counter from './Counter'
import Swal from 'sweetalert2'


//rendering all counters from Counter components
class Counters extends React.Component {
    //set counter id and value

    state = {
        itemName: '',
        itemId: '',
    };

    onValueChange = (event) => {
        let { name, value } = event.target;
        switch (name) {
            case 'itemName':
                this.setState({ itemName: value, });
                break;
            case 'itemId':
                this.setState({ itemId: value });
                break;
            default:
                break;
        }
        console.log(this.state);

    }

    validateItem = () => {
        if (this.state.itemName.length < 2) {
            Swal.fire(
                'Error!',
                'Item name is required',
                'warning'
            )

        }
        else if (this.state.itemId.length < 1) {
            Swal.fire(
                'Error!',
                'Item id is required',
                'warning'
            )
        }
        else {
            let itemData = { itemName: this.state.itemName, itemId: this.state.itemId };
            this.setState({ itemName: '', itemId: '' });
            this.props.onAddItem(itemData)
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
                                <div className="form-row">
                                    <div className="col-md-6 mb-3 form-group">
                                        <input
                                            type="text"
                                            name="itemName"
                                            value={this.state.itemName}
                                            onChange={this.onValueChange}
                                            className="form-control"
                                            placeholder="Item name" />
                                        <span className="valid-tooltip">
                                            Item name is required!
                                        </span>
                                    </div>
                                    <div className="col-md-6 mb-3 form-group">
                                        <input
                                            type="number"
                                            name="itemId"
                                            value={this.state.itemId}
                                            onChange={this.onValueChange}
                                            className="form-control"
                                            placeholder="Item id" />
                                        <span className="invalid-tooltip">
                                            Item id is required!
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <button
                                    className="btn btn-warning btn-sm m-3 float-left"
                                    onClick={this.props.onReset}>
                                    Reset
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm m-3 float-right"
                                    onClick={this.validateItem}>
                                    Add item
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {this.props.counters.map(counter => (
                                <li className="list-group-item" key={counter.id}>
                                    <Counter
                                        key={counter.id}
                                        counter={counter}
                                        onDelete={this.props.onDelete}
                                        onIncrement={this.props.onIncrement}
                                        onDecrement={this.props.onDecrement}>
                                        <h4 className="float-left">{counter.itemName} </h4>
                                    </Counter>
                                </li>
                            ))}
                        </ul>
                        {this.props.counters.length == 0 && <p className="text-center">Shopping list empty</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Counters;