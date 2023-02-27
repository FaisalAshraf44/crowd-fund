import {DashboardData} from '../../constants/types';

export const getInvestorData = (data: DashboardData) => {
  console.log('---- ha bai:', data);

  return {
    type: 'INVESTOR_DATA',
    payload: data,
  };
};

export const startFetchingData = () => {
  return {
    type: 'START_FETCHING',
  };
};
