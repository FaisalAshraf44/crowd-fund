import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {Investments} from '../../constants/types';
import {ArrowDownIcon, FiltersIcon} from '../../icons';
import Divider from '../Divider';
import FilterButton from '../FilterButton';
import InvestmentItem from '../InvestmentItem';

interface ProfitDistributionProps {
  data: Investments[];
}

const InvestmentsList = ({data}: ProfitDistributionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>List of Investments</Text>
        <View style={styles.row}>
          <FilterButton label="Sort by" icon={<ArrowDownIcon />} />
          <View style={{width: 8}} />
          <FilterButton label="Filter " icon={<FiltersIcon />} />
        </View>
      </View>

      <Divider />

      {data &&
        data.map(item => {
          return (
            <View key={item.key}>
              <InvestmentItem propertyData={item} />
              <Divider />
            </View>
          );
        })}
    </View>
  );
};

export default InvestmentsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 24,
  },
  header: {
    padding: 16,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...FONTS.body4,
    color: COLORS.value,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
