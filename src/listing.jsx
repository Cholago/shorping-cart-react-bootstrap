import React from 'react';

//list items with react js tutorial
class Counter extends React.Component {
    state = {
        count: 1,
        shoppingCart:
            [
                { id: 1, name: "Wilson Chola" },
                { id: 2, name: "Freeman Cholago" },
                { id: 3, name: "Harios Samigo" },
                { id: 4, name: "Triza Ndunda" },
                { id: 5, name: "Monica manga" },
                { id: 6, name: "Solomon Mwadilo" }
            ]
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClass()}>{this.formCount()}</span>
                <button className="btn btn-primary btn-sm m-3">Increment</button>
                {this.renderList()}

            </div>
        );
    }

    //rende list if the list is not empty
    renderList() {
        if (this.state.shoppingCart.length == 0) {
            return <p>The list is empty</p>;
        }
        else {
            return <ul>
                {this.state.shoppingCart.map(cart => <li key={cart.id}>Name is {cart.name} and id is {cart.id}</li>)}
            </ul>;
        }

    }

    formCount() {
        let counter = (this.state.count == 0) ? "zerro" : this.state.count;
        return counter;

    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count == 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;