export interface Investments {
  key: number;
  image: string;
  propertyName: string;
  propertyValue: string;
  propertyType: string;
  date: string;
  roi: string;
}

export interface InvestorData {
  firstName: string;
  lastName: string;
  totalInvested: string;
  currentValue: string;
  avgReturn: string;
  currentGrowth: number;
  avgGrowth: number;
}

export interface DashboardData {
  investor: InvestorData;
  investments: Investments[];
}
