import axios from 'axios';

const params = {
  serviceKey: import.meta.env.VITE_API_KEY,
  returnType: 'json',
  numOfRows: 10,
  pageNo: 1,
  sidoName: '서울',
};

export const fetchAllFineDust = async () => {
  return axios
    .get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
      params,
    })
    .then((res) => res.data.response.body);
};
