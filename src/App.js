import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailContainer from './containers/detail-container';
import HomePage from './pages/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/playlists/:name" component={DetailContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
