import React from 'react';
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
}

export default Counter;