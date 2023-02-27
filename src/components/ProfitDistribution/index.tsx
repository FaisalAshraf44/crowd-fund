import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {COLORS, FONTS} from '../../constants';
import {ArrowDownIcon} from '../../icons';
import Divider from '../Divider';
import FilterButton from '../FilterButton';
import DistributionLabel from './DistributionLabel';

interface ProfitDistributionProps {}

const ProfitDistribution = (props: ProfitDistributionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profit Distribution</Text>
        <FilterButton label="Weekly" icon={<ArrowDownIcon />} />
      </View>
      <Divider />
      <View style={{height: 24}} />

      <AnimatedCircularProgress
        size={180}
        width={32}
        backgroundWidth={12}
        fill={42.85}
        tintColor={COLORS.blue}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#F5F5F5"
        rotation={0}
      />
      <View style={styles.row}>
        <DistributionLabel label="Commercial" value={42.85} marginRight />
        <DistributionLabel label="Residential" value={57.15} />
      </View>
    </View>
  );
};

export default ProfitDistribution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingBottom: 16,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingTop: 24,
    paddingBottom: 12,
  },
});
