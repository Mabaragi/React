// 텍스트, 색상, 크기, 이벤트 조절 가능한 버튼. 스타일은 margin만 조절

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = ({text, color, width, height, onPress, style}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  const buttonStyle = {
    backgroundColor: color,
    width,
    height,
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, style]}
      onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyButton;
