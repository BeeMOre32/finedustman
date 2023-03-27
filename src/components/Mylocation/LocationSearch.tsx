import React, { useEffect, useState } from 'react';
import { location } from '../../constant/location';
import { useQuery } from '@tanstack/react-query';
import { fetchFineDustByLocation } from '../../api/api';
import { FetchFineDust } from '../../interface/apiInterface';
import FineDustCard from '../Home/FinDustCard';

function LocationSearch() {
  const locationData = [...location];
  const [locationValue, setLocationValue] = useState('');

  const { data } = useQuery<FetchFineDust>(['location', locationValue], () =>
    fetchFineDustByLocation(locationValue)
  );

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationValue(e.target.value);
  };

  const setLocalData = () => {
    if (locationValue) {
      localStorage.setItem('location', locationValue);
    }
  };

  useEffect(() => {
    setLocalData();
  }, [locationValue]);

  useEffect(() => {
    const localData = localStorage.getItem('location');
    if (localData) {
      setLocationValue(localData);
    }
  }, []);

  return (
    <div className="location__search">
      <select onChange={onChange} value={locationValue}>
        {locationData.map((data) => {
          return (
            <option key={data} value={data} onChange={() => onChange}>
              {data}
            </option>
          );
        })}
      </select>
      <div className="location__grid">
        {data
          ? data.items.map((fineDust) => (
              <FineDustCard key={fineDust.stationName} data={fineDust} />
            ))
          : null}
      </div>
    </div>
  );
}

export default LocationSearch;
