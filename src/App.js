import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="[ container-fluid ]">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="[ navbar-brand ]" href="/">KFUM</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            {this.props.children}
          </div>
        </div>
    </div>
    );
  }
}

export default App;
