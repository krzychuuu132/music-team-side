import React from 'react';

import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './styles/style.scss';

import "jquery";
import "bootstrap";


const App = () => {

  return (
    <div className="App">

      <Header />
      <Article />
      <Main />

    </div>
  );

}

export default App;
