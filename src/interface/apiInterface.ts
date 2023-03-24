export interface FetchFineDust {
  totalCount: number;
  items: FinDustDetail[];
  pageNo: number;
  numOfRows: number;
}

export interface FinDustDetail {
  so2Grade: string;
  coFlag: null;
  khaiValue: string;
  so2Value: string;
  coValue: string;
  pm10Flag: null;
  o3Grade: string;
  pm10Value: string;
  khaiGrade: string;
  sidoName: SidoName;
  no2Flag: null;
  no2Grade: string;
  o3Flag: null;
  so2Flag: null;
  dataTime: string;
  coGrade: string;
  no2Value: string;
  stationName: string;
  pm10Grade: string;
  o3Value: string;
}

export type SidoName = '서울';
