import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import DustCardModal from '../Home/DustCardModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AnimatePresence } from 'framer-motion';

function Main() {
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
      <AnimatePresence>
        {modal.isOpen ? <DustCardModal /> : null}
      </AnimatePresence>
    </main>
  );
}

export default Main;
