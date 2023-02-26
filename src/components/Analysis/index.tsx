import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {COLORS, FONTS} from '../../constants';
import Divider from '../Divider';

interface InvestmentAnalysisProps {}

const InvestmentAnalysis = (props: InvestmentAnalysisProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analysis</Text>
      </View>
      <Divider />
      <View style={{height: 24}} />
      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 48} // from react-native
        height={200}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `#0E9CFF`,
          labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
          style: {
            borderRadius: 16,
            marginVertical: 8,
          },
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#0E9CFF',
            fill: '#fff',
          },
          propsForBackgroundLines: {
            strokeDasharray: '4 2',
            stroke: '#CCCCCC',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        yLabelsOffset={24}
      />
    </View>
  );
};

export default InvestmentAnalysis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingBottom: 16,
    marginTop: 8,
  },
  header: {
    padding: 16,
  },
  title: {
    ...FONTS.body4,
    color: COLORS.value,
  },
});
