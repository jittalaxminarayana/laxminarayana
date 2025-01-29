import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FreelancePortfolio from './components/FreelancePortfolio/FreelancePortfolio';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<FreelancePortfolio />} />
      </Routes>
    </Router>
  );
};

export default App;