import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import Divider from '../Divider';

interface ProfitDistributionProps {}

const ProfitDistribution = (props: ProfitDistributionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profit Distribution</Text>
      </View>
      <Divider />
      <View style={{height: 24}} />
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
  },
  header: {
    padding: 16,
  },
  title: {
    ...FONTS.body4,
    color: COLORS.value,
  },
});
