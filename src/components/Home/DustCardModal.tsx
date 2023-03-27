import React from 'react';
import '../../styles/home.scss';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/slice/modalReducer';
import { RootState } from '../../store/store';

export default function DustCardModal() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.modal.data);
  if (!data) return <></>;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };
  return (
    <motion.div className="modal__wrapper" onClick={onClick}>
      <motion.div layoutId={data.stationName} className="modal__container">
        <div className="modal__header">
          <h1>
            {data.sidoName}시 {data.stationName}
          </h1>
        </div>
        <div className="modal__body">
          <div className="item">
            <h3>미세먼지</h3>
            <p>{data.pm10Value}</p>
          </div>
          <div className="item">
            <h3>오존</h3>
            <p>{data.o3Value}</p>
          </div>
          <div className="item">
            <h3>이산화질소</h3>
            <p>{data.no2Value}</p>
          </div>
          <div className="item">
            <h3>일산화탄소</h3>
            <p>{data.coValue}</p>
          </div>
        </div>
        <div className="modal__footer">
          <p>측정일시: {data.dataTime}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
