import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            list: [
                { b: 'a', value: 'a' },
                { b: 'b', value: 'a' },
                { b: 'c', value: 'a' }
            ],
        };
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onAddItem = () => {
        this.setState(state => {
            const list = state.list.concat({ b: state.value, value: state.value });
            return {
                list,
                value: '',
            };
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item.b}>{item.b}</li>
                    ))}
                </ul>

                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                />
                <button
                    type="button"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}>
                    Add
                </button>
            </div>
        );
    }
}

export default App;