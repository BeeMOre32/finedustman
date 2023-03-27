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
import { Provider } from 'react-redux';
import store from './store/store';
import MyLocation from './pages/MyLocation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<p>Error</p>} />
      <Route path="/location" element={<MyLocation />} />
      <Route path="/favorite" element={<p>favorite</p>} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
