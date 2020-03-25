import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';

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
          <Route path='/resume' component={Resume} />
        </Switch>
      </div>

      <div className="App-Footer">
        <Footer/>
      </div>

      <style>{`
          .App {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 7% 1fr 3%;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }

          .App-Header {
            width: 100vw;
            height: 100%;
            overflow: hidden;
          }

          .App-Body {
            width: 100vw;
            height: 100%;
            overflow-x: hidden;
          }

          .App-Footer {
            width: 100vw;
            height: 100%;
            overflow: hidden;
          }

          `}</style>
      </div>
    );
  }

  export default App;
