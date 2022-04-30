import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import done from '../assets/images/done.png';

const Item = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.functionalContainer}>
        <Text style={styles.functionalText}>{item.functional}</Text>
      </View>
      <View style={styles.freeContainer}>
        {item.free ? (
          <Image style={styles.yes} source={done} />
        ) : (
          <Text style={styles.no}>нет</Text>
        )}
      </View>
      <View style={styles.subscriptionContainer}>
        {item.subscription ? (
          <Image style={styles.yes} source={done} />
        ) : (
          <Text style={styles.no}>Нет</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#EDEEF8',
    minHeight: 52,
  },
  functionalContainer: {
    borderRightWidth: 1,
    borderColor: '#EDEEF8',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  functionalText: {
    width: '90%',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
    color: '#15284E',
  },
  freeContainer: {
    borderRightWidth: 1,
    borderColor: '#EDEEF8',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneImage: {
    width: 24,
    height: 24,
  },
  no: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#E35953',
  },
  subscriptionContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Item;
