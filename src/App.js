import React, { useState, useEffect } from 'react';
import './App.css';
import LoadBar from './LoadBar/LoadBar';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState();
  const [loadNumber, setLoadNumber] = useState(0);

  useEffect(() => {
    setLoading(true);
    const interval = setInterval(() => {
      if (loadNumber < 100) {
        setLoadNumber(loadNumber + 5);
      } else if (loadNumber === 100) {
        setLoading(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [loadNumber]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoadBar loading={loading} loadNumber={loadNumber} />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
