import React, { Component } from 'react';
import Movies from './containers/Movies/Movies';
//import Movie from './containers/Movie/Movie';
import Actors from './containers/Actors/Actors';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/actors">Actors</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/actors' component={Actors} />
          {/* <Route path='/movies/:movieId' component={Movie} /> */}
          <Route path='/movies' component={Movies} />
          <Redirect from='/all-movies' to='/movies' />
          <Route render={() => <h3 className="not-found">Page Not Found</h3>} />
        </Switch>
      </div >
    );
  }
}

export default App;
