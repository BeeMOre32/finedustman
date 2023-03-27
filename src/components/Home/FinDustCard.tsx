import React from 'react';
import { FineDustCardInterface } from '../../interface/componentInterface';
import classNames from 'classnames';
import { motion, Variants } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slice/modalReducer';

const variants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.02,
    translateY: -5,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};
function FineDustCard({ data }: FineDustCardInterface) {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      layoutId={data.stationName}
      onClick={() => dispatch(openModal({ data: data }))}
      variants={variants}
      className={classNames(
        'dust__card',
        data.khaiGrade === '1' && 'good',
        data.khaiGrade === '2' && 'normal',
        data.khaiGrade === '3' && 'not-good',
        data.khaiGrade === '4' && 'bad',
        data.khaiGrade === '5' && 'very-bad',
        data.khaiGrade === null && 'no-data'
      )}
    >
      <h2>{data.stationName}</h2>
      <div className="info">
        <div className="item">
          <h3>미세먼지</h3>
          <p>{data.pm10Value}</p>
        </div>
        <div className="item">
          <div className="line"></div>
        </div>
        <div className="item">
          <h3>오존</h3>
          <p>{data.o3Value}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default FineDustCard;
