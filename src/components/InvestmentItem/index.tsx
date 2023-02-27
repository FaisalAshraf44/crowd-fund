import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {property} from '../../assets/images';
import {COLORS, FONTS} from '../../constants';
import {MenuIcon} from '../../icons';
import Divider from '../Divider';

interface InvestmentItemProps {}

const InvestmentItem = (props: InvestmentItemProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.spaceBetween]}>
        <View style={styles.row}>
          <Image source={property} style={styles.imageStyle} />
          <View style={styles.dataContainer}>
            <Text style={styles.title}>762 D R Placerville</Text>
            <View style={[styles.row, {marginTop: 2}]}>
              <Text style={styles.value}>$150,000</Text>
              <Text style={styles.label}> | Commercial</Text>
            </View>
          </View>
        </View>
        <MenuIcon />
      </View>

      <Divider verticalSpacing />

      <View style={[styles.row, styles.spaceBetween]}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title1}>Maturity date</Text>
            <Text style={[styles.title, {marginTop: 4}]}>Dec 23, 2023</Text>
          </View>
          <View style={{marginLeft: 32}}>
            <Text style={styles.title1}>Return</Text>
            <Text style={[styles.title, {marginTop: 4}]}>20%</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={{...styles.title1, color: COLORS.blue}}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InvestmentItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    padding: 16,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...FONTS.title,
  },
  title1: {
    ...FONTS.title,
    color: COLORS.primaryDark,
    fontWeight: '500',
  },
  value: {
    ...FONTS.body5,
    color: COLORS.primaryDark,
  },
  label: {
    ...FONTS.body5,
    color: '#797979',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 80,
    height: 48,
    borderRadius: 4,
  },
  dataContainer: {
    marginLeft: 12,
  },
  sellButton: {
    backgroundColor: COLORS.lightBlue,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
