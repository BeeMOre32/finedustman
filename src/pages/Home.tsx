import React, { useEffect, useState } from 'react';
import '../styles/home.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchAllFineDust } from '../api/api';
import { FetchFineDust, FinDustDetail } from '../interface/apiInterface';
import useGetGradeToText from '../hooks/useGetGradeToText';
import FineDustCard from '../components/Home/FinDustCard';
function Home() {
  const { isLoading, data } = useQuery<FetchFineDust>(
    ['fineDust'],
    fetchAllFineDust,
    {
      refetchInterval: false,
    }
  );
  const [fineDustData, setFineDustData] = useState<FinDustDetail[]>();

  useEffect(() => {
    if (data) setFineDustData(data.items);
  }, [data]);

  if (isLoading) return <div>로딩중...</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  const currentFineDust = data.items[0];
  const seoulJonguAirGrade = useGetGradeToText(currentFineDust.khaiGrade);

  const setReverseData = () => {
    if (fineDustData) {
      const reverseData = [...fineDustData].reverse();
      setFineDustData(reverseData);
    }
  };

  return (
    <div className="home">
      <h1>
        안녕하세요! 지금 대기질은 서울시 {currentFineDust.stationName}를
        기준으로 {seoulJonguAirGrade}
        입니다!
      </h1>
      <button onClick={setReverseData}>데이터 뒤집기</button>
      <div className="dust__wrapper">
        {fineDustData
          ? fineDustData.map((item) => (
              <FineDustCard key={item.stationName} data={item} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Home;
