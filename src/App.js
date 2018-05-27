import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import { connect } from 'react-redux'
import Saroj from './component/studentlist';

class App extends Component {

  render() {
    return (
      <div>
        <Saroj/>
      </div>  
  );
  }
}

// function mapStateToProps(store) {
//   return {
//     list: store.students
//   }
// }

export default App;