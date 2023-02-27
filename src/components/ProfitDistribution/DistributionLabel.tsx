import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

interface DistributionLabelProps {
  label: string;
  value: number;
  marginRight?: boolean;
}

const DistributionLabel = ({
  label,
  value,
  marginRight,
}: DistributionLabelProps) => {
  const color = label === 'Commercial' ? COLORS.blue : COLORS.gray;
  return (
    <View style={[styles.container, {marginRight: marginRight ? 24 : 0}]}>
      <View style={[styles.dot, {backgroundColor: color}]} />
      <Text style={styles.label}>
        {value}% {label}
      </Text>
    </View>
  );
};

export default DistributionLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...FONTS.body5,
    color: COLORS.black,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 16,
    marginRight: 4,
  },
});
