import React from 'react';
class Counter extends React.Component {
    state = {
        value: this.props.counter.value

    }

    render() {
        //props data from counter
        console.log('Props', this.props);
        //get passed event onDelete and call it on the counters
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.children}
                    <span className={this.getBadgeClass()}>{this.formCount()}</span>
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                    <button className="btn btn-danger btn-sm float-right" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            </div>
        );
    }

    formCount() {
        let { value } = this.props.counter;
        return value === 0 ? "zerro" : value;

    }

    getBadgeClass() {
        let classes = "float-right badge m-2 badge-";
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;