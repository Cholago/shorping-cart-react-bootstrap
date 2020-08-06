import React from 'react';
class Statemanegment extends React.Component {
    state = {
        count: 0,

    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClass()}>{this.formCount()}</span>
                <button className="btn btn-primary btn-sm m-3" onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
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

export default Statemanegment;