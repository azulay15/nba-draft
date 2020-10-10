import React from 'react';
import './App.css';
import BigBoard from './BigBoard';
import BigBoardNextYear from './BigBoardNextYear';
import MockDraft from './MockDraft';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






function App() {



  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />;
              <Route path="/bigBoard"  component={BigBoard} />
              <Route path="/mockDraft"  component={MockDraft} />
              <Route path="/bigBoardNextYear"  component={BigBoardNextYear} />
            </Switch>

        </div>  
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>

  </div>

);

export default App;
