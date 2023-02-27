import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../redux/store';
import {DashboardData} from '../constants/types';
import FetchMock from 'react-native-fetch-mock';
import {
  getInvestorData,
  startFetchingData,
} from '../redux/actions/investorDataAction';

const fetch = new FetchMock(require('../../__mocks__'), {delay: 2000}).fetch;

export default () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const {isFetching, investments, investor} = useAppSelector(
    store => store.investorDataReducer,
  );

  const getData = async () => {
    dispatch(startFetchingData());
    await fetch('/api/users')
      .then((response: any) => response.json())
      .then((res: DashboardData) => {
        dispatch(getInvestorData(res));
        setLoading(false);
      })
      .catch((err: string) => {
        console.warn(err);
        setLoading(false);
      });
  };

  return {
    loading,
    isFetching,
    investor,
    investments,
    getData,
  };
};
