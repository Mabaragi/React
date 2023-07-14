import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputId = ({onInputChange}) => {
  const [text, setText] = useState('');
  const reset = () => {
    setText('');
  };
  const handleTextChange = text => {
    setText(text);
    onInputChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Text onPress={reset} style={styles.label}>
        ID
      </Text>
      <TextInput
        style={styles.inputBox}
        color={'black'}
        placeholder="아이디를 입력하세요"
        value={text}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: 50,
    // backgroundColor: 'green',
  },
  label: {
    fontWeight: 'bold',
  },
  inputBox: {
    backgroundColor: '#eeeeee',
    width: 200,
    height: 40,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default InputId;
