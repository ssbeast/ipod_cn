import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

import * as serviceWorker from './serviceWorker';

import Audio from "./Audio";

function App() {
  return (
    <div className="App">
      <Audio />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
