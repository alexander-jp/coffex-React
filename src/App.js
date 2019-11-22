import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';



export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }

}