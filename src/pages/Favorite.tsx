import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SaveLocalStates } from '../store/slice/saveLocalReducer';
import { fetchFineDustByLocationForFavorite } from '../api/api';
import { FinDustDetail } from '../interface/apiInterface';
import '../styles/favorite.scss';
import FineDustCard from '../components/Home/FinDustCard';
function Favorite() {
  const [favoriteFineDustData, setFavoriteFineDustData] =
    useState<FinDustDetail[]>();
  const savedData = useSelector((state: RootState) => state.saveLocal);

  const getFavoriteFineDust = async (favorite: SaveLocalStates) => {
    const filteredData = favorite.filter((data) => data.cityName !== '');
    const fetchedData = [];
    for (const data of filteredData) {
      const fetched = await fetchFineDustByLocationForFavorite(data.sidoName);
      fetchedData.push(
        ...fetched.items.filter((item) => item.stationName === data.cityName)
      );
    }
    setFavoriteFineDustData(fetchedData);
    return fetchedData;
  };

  useEffect(() => {
    getFavoriteFineDust(savedData);
  }, []);

  return (
    <div className="favorite__wrapper">
      <h1>즐겨찾기로 등록한 지역을 이 곳에서 확인 할 수 있습니다!</h1>
      <div className="favorite__grid">
        {favoriteFineDustData
          ? favoriteFineDustData.map((data) => (
              <FineDustCard key={data.stationName} data={data} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Favorite;
