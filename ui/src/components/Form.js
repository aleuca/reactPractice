import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.name}
          <input
            type="text"
            name={this.props.name}
            className={this.props.className}
            id={this.props.name}
            onChange={this.props.keyHandler}
          />

        </label>
        <button onClick={this.props.buttonHandler}>Add Item </button>
      </div>
    );
  }
}

export default Form;