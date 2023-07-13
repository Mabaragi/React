import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputPassword = () => {
  const [text, setText] = useState('');
  const reset = () => {
    setText('');
  };
  return (
    <View style={styles.inputContainer}>
      <Text onPress={reset} style={styles.label}>
        비밀번호
      </Text>
      <TextInput
        style={styles.inputBox}
        color={'black'}
        placeholder="비밀번호를 입력하세요"
        value={text}
        onChangeText={setText}
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

export default InputPassword;
