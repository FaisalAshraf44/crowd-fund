import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {GrowthDownIcon, GrowthUpIcon} from '../../icons';

interface InvestmentsDataProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  growth?: number;
}

const InvestmentsData = ({
  icon,
  value,
  label,
  growth,
}: InvestmentsDataProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View>
        <View style={styles.row}>
          <Text style={FONTS.largeTitle}>{value}</Text>
          {growth && growth > 0 && (
            <View
              style={[
                styles.row,
                styles.indicator,
                {backgroundColor: COLORS.lightGreen},
              ]}>
              <Text style={[styles.indicatorText, {color: COLORS.green}]}>
                +{growth}%
              </Text>
              <GrowthUpIcon />
            </View>
          )}
          {growth && growth < 0 && (
            <View
              style={[
                styles.row,
                styles.indicator,
                {backgroundColor: COLORS.lightRed},
              ]}>
              <Text style={[styles.indicatorText, {color: COLORS.red}]}>
                {growth}%
              </Text>
              <GrowthDownIcon />
            </View>
          )}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default InvestmentsData;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...FONTS.body4,
    color: '#656565',
    marginTop: 4,
  },
  indicator: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 24,
    marginLeft: 12,
  },
  indicatorText: {
    ...FONTS.body5,
    marginRight: 3,
  },
});
