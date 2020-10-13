import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'fontsource-roboto';
import './App.css';

import Navigation from './components/Navigation';

import DemoPage from './pages/DemoPage/Demo';
import HomePage from './pages/HomePage/Home';

class App extends Component {
  render() {
    return(
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <BrowserRouter>
      <div>
          <Navigation />
          <Switch>
           <Route path="/" component={HomePage} exact/>
           <Route path="/demo" component={DemoPage}/>
         </Switch>
      </div> 
    </BrowserRouter>
    );
  }
}

export default App;
