import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Passenger} from './Components/Passenger';
import './css/index.css';
import {Library} from "./Components/Library/index";
import {Driver} from "./Components/Driver/index";
import {Login} from "./Components/Login/index";
import {Home} from "./Components/Home";


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
            <Route path={'/home/'} component={Home} />
            <Route path={'/passenger/'} component={Passenger} />
            <Route path={'/driver/'} component={Driver} />
            <Route path={'/library/'} component={Library} />
            <Route path={'/'} component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

