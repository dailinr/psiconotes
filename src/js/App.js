import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Aside } from './Aside';
import Calendar from './Calendar';
import { Main } from './../components/Main'

function App() {
  return (
    <Router>
      <div className="App">
        <Aside />
        <Switch>
          <Route path="/calendario" component={Calendar} />
          <Route path="/" component={Main} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
