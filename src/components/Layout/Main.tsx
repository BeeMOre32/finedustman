import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import DustCardModal from '../Home/DustCardModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { motion, AnimatePresence } from 'framer-motion';
import darkModeIcon from '../../asset/darkMode.svg';
import classNames from 'classnames';
import { toggleDarkMode } from '../../store/slice/darkModeReducer';
function Main() {
  const modal = useSelector((state: RootState) => state.modal);
  const darkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <div className={classNames('App', { dark: darkMode })}>
      <main className="">
        <Header />
        <Outlet />
        <Footer />
        <AnimatePresence>
          {modal.isOpen ? <DustCardModal /> : null}
        </AnimatePresence>
        <div className="darkmode__wrapper">
          <motion.div
            className={classNames('darkmode__setter', {
              active: darkMode,
            })}
            onClick={() => dispatch(toggleDarkMode())}
          >
            <motion.img src={darkModeIcon} alt="" layout />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Main;
