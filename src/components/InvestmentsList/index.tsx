import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {ArrowDownIcon, FiltersIcon} from '../../icons';
import Divider from '../Divider';
import FilterButton from '../FilterButton';
import InvestmentItem from '../InvestmentItem';

interface ProfitDistributionProps {}

const InvestmentsList = (props: ProfitDistributionProps) => {
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

      <FlatList
        data={[{}, {}, {}]}
        renderItem={({item}) => <InvestmentItem />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
