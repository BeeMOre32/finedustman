import axios from 'axios';
import { FetchFineDust } from '../interface/apiInterface';

const params = {
  serviceKey: import.meta.env.VITE_API_KEY,
  returnType: 'json',
  numOfRows: 10,
  pageNo: 1,
  sidoName: '서울',
};

export const fetchAllFineDust = async () => {
  return axios
    .get(
      'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      {
        params,
      }
    )
    .then((res) => res.data.response.body);
};

export const fetchFineDustByLocation = async (location: string) => {
  if (location === '') return { items: [] };
  return axios
    .get(
      'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      {
        params: { ...params, sidoName: location, numOfRows: 10 },
      }
    )
    .then((res) => res.data.response.body);
};

export const fetchFineDustByLocationForFavorite = async (
  location: string
): Promise<FetchFineDust> => {
  return axios
    .get(
      'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      {
        params: { ...params, sidoName: location, numOfRows: 100 },
      }
    )
    .then((res) => res.data.response.body);
};
