import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Checkbox from './Checkbox'
import Form from './Form'


class List extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      text: "...",
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.updateText = this.updateText.bind(this)
    this.refreshItems = this.refreshItems.bind(this)
  }

  componentDidMount() {
    this.refreshItems()
  }

  addItem() {
    fetch("api/items", {
      body: JSON.stringify({ text: this.state.text }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
    .then((response) => {
      this.refreshItems()
    })
  }

    refreshItems() {
      fetch("api/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded:true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
  }

  updateText(event) {
    const target = event.target;

    this.setState({
      text: target.value
    })
  }


  render() {
    const elements = []

    for(let i = 0; i < this.state.items.length; i++) {
      elements.push(<li> {this.state.items[i].text} </li>)
    }

    return (
      <div className="App">
        <Checkbox name="Tucker" className="checkbox"/>
        <Form keyHandler={this.updateText} buttonHandler={this.addItem} name='itemInput' className='input'/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.text}</h1>
        </header>
        <p className="App-intro">
        <ul>{elements}</ul>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default List;


// every item should be an object with a name and an img url