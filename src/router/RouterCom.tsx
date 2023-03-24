import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Layout/Main';
import Home from '../pages/Home';

function RouterCom() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default RouterCom;
