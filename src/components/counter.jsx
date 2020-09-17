import React, { Component } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GoPlus, GoDash } from "react-icons/go";

class Counter extends Component {
  render() {
    const { onDelete, onIncrement, counter, onDecrement } = this.props;

    return (
      <>
        <br />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          <GoPlus />
        </button>
        <button
          onClick={() =>
            counter.value > 0 ? onDecrement(counter) : counter.value
          }
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0}
        >
          <GoDash />
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          <BsFillTrashFill />
        </button>
      </>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
