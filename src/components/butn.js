import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Butn = ({onPress, text, blue, style}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style, blue ? styles.blue : styles.border]}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Butn;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  blue: {
    backgroundColor: '#2559D6',
  },
  border: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#FFFFFF',
  },
});
