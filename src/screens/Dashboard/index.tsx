import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import InvestmentAnalysis from '../../components/InvestmentsAnalysis';
import InvestmentsData from '../../components/InvestmentsData';
import InvestmentsList from '../../components/InvestmentsList';
import ProfitDistribution from '../../components/ProfitDistribution';
import SearchBox from '../../components/SearchBox';
import {COLORS, FONTS} from '../../constants';
import {ExploreIcon, GrowthIcon, InvestmentsIcon} from '../../icons';
import ReturnIcon from '../../icons/ReturnIcon';
import useDashboard from '../../hooks/useDashboard';

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const {getData, loading, isFetching, investor, investments} = useDashboard();

  useEffect(() => {
    getData();
  }, []);

  if (isFetching || loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.blue} />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 32}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>Property Dashboard</Text>
          <Text style={{...FONTS.h2, fontWeight: '400'}}>
            Welcome, {investor.firstName}!
          </Text>
        </View>
        <TouchableOpacity style={[styles.infoContainer, styles.browse]}>
          <ExploreIcon style={{color: COLORS.white, width: 16, height: 16}} />
          <Text style={styles.browseLabel}>Browse</Text>
        </TouchableOpacity>
      </View>
      <SearchBox customStyles={{marginVertical: 24}} />
      <InvestmentsData
        value={investor.totalInvested}
        label="Total Invested"
        icon={
          <InvestmentsIcon
            style={{width: 18, height: 19, color: COLORS.blue}}
          />
        }
      />
      <InvestmentsData
        value={investor.currentValue}
        label="Current Value"
        icon={
          <GrowthIcon style={{width: 18, height: 19, color: COLORS.blue}} />
        }
        growth={investor.currentGrowth}
      />
      <InvestmentsData
        value={investor.avgReturn}
        label="Average Return"
        icon={
          <ReturnIcon style={{width: 18, height: 19, color: COLORS.blue}} />
        }
        growth={investor.avgGrowth}
      />
      <InvestmentAnalysis />
      <ProfitDistribution />
      <InvestmentsList data={investments || []} />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...FONTS.h1,
  },
  browse: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.blue,
    borderRadius: 8,
  },
  browseLabel: {
    ...FONTS.h2,
    fontFamily: 'Metropolis-Medium',
    color: COLORS.white,
    marginLeft: 6,
  },
});
