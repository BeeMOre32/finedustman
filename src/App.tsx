import React from 'react';
import './styles/app.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<p>Error</p>} />
      <Route path="/location" element={<p>location</p>} />
      <Route path="/favorite" element={<p>favorite</p>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
