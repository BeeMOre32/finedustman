import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import DustCardModal from '../Home/DustCardModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Main() {
  const modal = useSelector((state: RootState) => state.modal);
  console.log(modal);
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
      {modal.isOpen ? <DustCardModal /> : null}
    </main>
  );
}

export default Main;
