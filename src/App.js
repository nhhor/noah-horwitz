import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div className="App-Header">
        <Header/>
      </div>

      <div className="App-Body">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </div>

      <div className="App-Footer">
        <Footer/>
      </div>

      <style>{`
          .App {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 80px 1fr 40px;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }

          .App-Header {
            width: 100vw;
            overflow: hidden;
          }

          .App-Body {
            width: 100vw;
            overflow: hidden;
          }

          .App-Footer {
            width: 100vw;
            overflow: hidden;
          }

          `}</style>
      </div>
    );
  }

  export default App;
