import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    count: 0,
  }
}

  buttonIncre = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

    buttonDecre = () => {
      this.setState({
        count: this.state.count - 1
      });
  }

  render() {
    return (
      <div className="App">
        <p className='number'>{this.state.count}</p>
        <button className='button' onClick={this.buttonIncre}>+</button>
        <button className='button' onClick={this.buttonDecre}>-</button>        
      </div>
    );
  }
}

export default App;
