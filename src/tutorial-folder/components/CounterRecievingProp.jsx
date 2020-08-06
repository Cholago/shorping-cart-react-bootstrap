import React from 'react';
class Counter extends React.Component {
    state = {
        value: this.props.value

    }

    render() {
        //props data from counte
        console.log('Props', this.props);
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClass()}>{this.formCount()}</span>
                <button className="btn btn-primary btn-sm m-3" onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    formCount() {
        let value = (this.state.value == 0) ? "zerro" : this.state.value;
        return value;

    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value == 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;