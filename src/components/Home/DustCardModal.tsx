import React from 'react';
import '../../styles/home.scss';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/slice/modalReducer';
import { RootState } from '../../store/store';
import { deleteLocal, saveLocal } from '../../store/slice/saveLocalReducer';
import times from '../../asset/times.svg';
import favorite from '../../asset/favorite.svg';

export default function DustCardModal() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.modal.data);
  const local = useSelector((state: RootState) => state.saveLocal);
  if (!data) return <></>;

  const isInLocal = local.some(
    (item) =>
      item.cityName === data.stationName && item.sidoName === data.sidoName
  );

  const localIndex = isInLocal
    ? local.findIndex(
        (item) =>
          item.cityName === data.stationName && item.sidoName === data.sidoName
      )
    : null;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  const handleSaveLocal = () => {
    dispatch(
      saveLocal({
        cityName: data.stationName,
        sidoName: data.sidoName,
      })
    );
  };

  const handleFilterLocal = () => {
    if (localIndex !== null) dispatch(deleteLocal(localIndex));
  };

  return (
    <motion.div className="modal__wrapper" onClick={onClick}>
      <motion.div layoutId={data.stationName} className="modal__container">
        <div className="modal__header">
          <div>
            <h1>
              {data.sidoName}시 {data.stationName}
            </h1>
          </div>

          <div className="icon__wrapper">
            {isInLocal ? (
              <img onClick={() => handleFilterLocal()} src={favorite} alt="" />
            ) : (
              <img onClick={handleSaveLocal} src={favorite} alt="" />
            )}
            <img onClick={() => dispatch(closeModal())} src={times} alt="" />
          </div>
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
