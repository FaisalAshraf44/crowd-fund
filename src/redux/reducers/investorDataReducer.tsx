import {Investments, InvestorData} from '../../constants/types';

const initialState = {
  isFetching: false,
  investor: {
    firstName: '',
    lastName: '',
    totalInvested: '',
    currentValue: '',
    avgReturn: '',
    currentGrowth: 0,
    avgGrowth: 0,
  },
  investments: [
    {
      key: 1,
      image: '',
      propertyName: '',
      propertyValue: '',
      propertyType: '',
      date: '',
      roi: '',
    },
  ],
};

interface Payload {
  isFetching: boolean;
  investor: InvestorData;
  investments: Investments[];
}

interface Action {
  type: string;
  payload: Payload;
}

const investorDataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return {
        ...state,
        isFetching: true,
      };
    case 'INVESTOR_DATA':
      return {
        ...state,
        investor: action.payload.investor,
        investments: action.payload.investments,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default investorDataReducer;
