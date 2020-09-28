import React, {Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

const App = ()=>{ 

    return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>   
    );
  }


export default App;
