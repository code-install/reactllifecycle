import React from 'react';
import Counter from './components/Counter.jsx'
import './App.css'


class App extends React.Component {
  constructor (props) {
    console.log('constructor')
    super(props)

    this.state ={
      mount: true,
      showLife: true
      
    }
    this.mountCounter = this.mountCounter.bind(this)
    this.unmountCounter = this.unmountCounter.bind(this)
  }

  handleToggle = () => {
    this.setState({
      showLife: !this.state.showLife
    })
  }

  mountCounter = () => {
    this.setState({
      mount: true
    })
  }

  unmountCounter = () => {
    this.setState({
      mount: false
    })
  }


  render() {
    
  return (
    <div className="App">
      <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
      {/* {this.state.mount ? <Counter /> : null} */}

      <button onClick={this.handleToggle}>Component Unmount</button>

      {this.state.showLife ? <Counter /> : <div></div>}

    </div>
  );
}
}

export default App;
