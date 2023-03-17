import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    advice:''
  }

componentDidMount() {
  this.fetchAdvice()
}
/*creating a function inside a class, meaning this is a method and does not require const*/
fetchAdvice = () => {
  axios.get('https://api.adviceslip.com/advice')
  .then((response) => {
    const { advice } = response.data.slip
    this.setState({advice});
  })
  .catch((error) => {
    console.log(error.message)
  })

}
/*Advice is in the scope of the function so we need to update the state of advice by using setState*/

  render() {
    const { advice } = this.state; /*rather than writing this.advice in h1 we destructure advice first and then pass only advice*/
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button'
        onClick={this.fetchAdvice}>
          <span>Give me advice!</span>
        </button>
      </div>
    </div>
  );
}}

export default App;
