import React from 'react';
import '../styles/home.scss';
import { useQuery } from 'react-query';
import { fetchData } from '../api/api';
import { FetchFineDust } from '../interface/apiInterface';
import useGetGradeToText from '../hooks/useGetGradeToText';
import FineDustCard from '../components/Home/FinDustCard';
function Home() {
  const { isLoading, data } = useQuery<FetchFineDust>(['fineDust'], fetchData, {
    refetchInterval: false,
  });
  if (isLoading) return <div>로딩중...</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  const currentFineDust = data.items[0];
  const seoulJonguAirGrade = useGetGradeToText(currentFineDust.khaiGrade);

  return (
    <div className="home">
      <h1>
        안녕하세요! 지금 대기질은 서울시 {currentFineDust.stationName}를
        기준으로 {seoulJonguAirGrade}
        입니다!
      </h1>
      <div className="dust__wrapper">
        {data.items.map((item) => (
          <FineDustCard key={item.stationName} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
