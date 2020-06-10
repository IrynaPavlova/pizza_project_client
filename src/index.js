<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/main.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/main.css";
import App from "./components/App";
>>>>>>> dev

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
<<<<<<< HEAD
  document.getElementById('root')
=======
  document.getElementById("root")
>>>>>>> dev
);
