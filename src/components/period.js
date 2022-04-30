import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import pop from '../assets/images/popular.png';

const Period = ({mounth, oldCost, newCost, popular}) => {
  return (
    <TouchableOpacity style={styles.period}>
      <Text style={styles.periodMounth}>{mounth}</Text>
      <View>
        {popular ? <Image style={styles.periodImage} source={pop} /> : false}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.periodOldCost}>{oldCost} ₽</Text>
        <Text style={styles.periodNewCost}>{newCost} ₽</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Period;

const styles = StyleSheet.create({
  period: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },
  periodMounth: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.78,
  },
  periodOldCost: {
    textDecorationLine: 'line-through',
    textDecorationColor: '#E35953',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#919AAF',
  },
  periodNewCost: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#15284E',
    width: 56,
    marginLeft: 3,
    textAlign: 'right',
  },
  periodImage: {
    width: 84,
    height: 24,
  },
});
