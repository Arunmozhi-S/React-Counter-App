import React, { Component } from "react";
import { BiRefresh } from "react-icons/bi";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      counters,
      onDecrement,
    } = this.props;

    return (
      <>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          <BiRefresh size={20} />
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
