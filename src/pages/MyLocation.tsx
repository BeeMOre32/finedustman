import React from 'react';
import '../styles/location.scss';
import LocationSearch from '../components/Mylocation/LocationSearch';
function MyLocation() {
  return (
    <div className="location">
      <h1>내 지역 주변 검색해보기</h1>
      <LocationSearch />
    </div>
  );
}

export default MyLocation;
