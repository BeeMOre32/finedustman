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
import { persistor, store } from './store/store';
import MyLocation from './pages/MyLocation';
import { PersistGate } from 'redux-persist/integration/react';
import Favorite from './pages/Favorite';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<MyLocation />} />
      <Route path="/favorite" element={<Favorite />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
