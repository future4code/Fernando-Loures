import React from 'react';
import './App.css';
import Create from './components/Create/Create';
import ListMusic from './components/ListMusic/ListMusic';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Create/>
        <ListMusic/>
      </div>
    );
  }
}