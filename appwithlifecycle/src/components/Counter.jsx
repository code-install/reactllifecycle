import React, { Component } from 'react'

const generateRandomString =length => {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



class Counter extends Component {
    
    constructor(props) {
        console.log('constructor')
        console.log('-------------')
       
        super(props)

        this.state = {
            counter: 0,
            displayString: "We are in the constructor",
            didUpdate: false
        }

        this.onDecrement = this.onDecrement.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
    }

    onIncrement = () => {
    this.setState({

        counter: this.state.counter + 1
    })
    }   

    onDecrement = () => {
    this.setState({
        counter: this.state.counter - 1
    })
    }

    handleChangeDisplayString = () => {
        const newDisplayString = generateRandomString(8)
        this.setState({
            displayString: newDisplayString,
            didUpdate: true
        })
    }

    // component Did Mount right after constructor 

    componentDidMount() {
        
      console.log('we are in the component did mount')
        this.setState({
            displayString: "We are in the component did mount"
        })
    }
    
    
    
  render() {
    return (
      <div className="row">
        <div>
        Counter: {this.state.counter}
        <div>
        Life Cycle: {this.state.displayString}
        </div>
        </div>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
            <button onClick={this.handleChangeDisplayString}>Generate a new string</button>
      </div>

    )
  }

  // component did update
  // In order to navigate the infinite loop 
  // in componentdidupdate we can use conditional statements. 
  componentDidUpdate(prevProps, prevState ) {
      console.log('compoenent did update')
      if(this.state.didUpdate === true) {
          console.log('compoenent did update')
          this.setState({
              counter: this.state.counter + 1,
              didUpdate: false
          })
      }
        
  }

  componentWillUnmount() {
      console.log('component is being unmounted')
        console.log('-------------')
  }
}

export default Counter
