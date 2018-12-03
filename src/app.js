import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Homepage from './Homepage';
import { Provider } from 'react-redux';
import {store} from './Redux/index';

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
      <Homepage/>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);