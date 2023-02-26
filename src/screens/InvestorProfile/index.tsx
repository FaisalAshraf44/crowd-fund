import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface InvestorProfileProps {}

const InvestorProfile = (props: InvestorProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>InvestorProfile</Text>
    </View>
  );
};

export default InvestorProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
});
