import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main';
import SecondMain from './components/SecondMain';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='main-header'>
          <Header />
        </div>
        <div className='main-body'>
          <Route exact path='/' render={() => <Main />}></Route>
          <Route exact path='/next' render={() => <SecondMain />}></Route>
        </div>
        <div className='main-footer'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
