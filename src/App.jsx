
// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Body } from './pages/Body/Body';

function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;
