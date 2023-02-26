import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InvestmentsData from '../../components/InvestmentsData';
import SearchBox from '../../components/SearchBox';
import {COLORS, FONTS} from '../../constants';
import {ExploreIcon, GrowthIcon, InvestmentsIcon} from '../../icons';
import ReturnIcon from '../../icons/ReturnIcon';

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>Property Dashboard</Text>
          <Text style={{...FONTS.h2, fontWeight: '400'}}>
            Welcome, Cameron!
          </Text>
        </View>
        <TouchableOpacity style={[styles.infoContainer, styles.browse]}>
          <ExploreIcon style={{color: COLORS.white, width: 16, height: 16}} />
          <Text style={styles.browseLabel}>Browse</Text>
        </TouchableOpacity>
      </View>
      <SearchBox customStyles={{marginVertical: 24}} />
      <InvestmentsData
        value="320,654.00"
        label="Total Invested"
        icon={
          <InvestmentsIcon
            style={{width: 18, height: 19, color: COLORS.blue}}
          />
        }
      />
      <InvestmentsData
        value="320,654.00"
        label="Current Value"
        icon={
          <GrowthIcon style={{width: 18, height: 19, color: COLORS.blue}} />
        }
        growth={1.1}
      />
      <InvestmentsData
        value="17%"
        label="Average Return"
        icon={
          <ReturnIcon style={{width: 18, height: 19, color: COLORS.blue}} />
        }
        growth={-1.1}
      />
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
