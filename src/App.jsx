import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Body } from './pages/Body/Body';
import { UserProvider } from "./common/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Body />
      </Router>
    </UserProvider>
  );
}

export default App;
