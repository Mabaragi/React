// 로그인 페이지
import {React, useState} from 'react';
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import InputId from '../../components/InputId';
import InputPassword from '../../components/InputPassword';
import MyButton from '../../components/MyButton';

const Login = ({navigation}) => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const handleInputId = id => {
    setInputId(id);
  };
  const handleInputPassword = password => {
    setInputPassword(password);
  };
  const getLogin = () => {
    alert('로그인');
  };
  const goSignIn = () => {
    navigation.navigate('SignUp');
  };
  const getSignInKakao = () => {
    alert('카카오 로그인');
  };
  const getSignInGoogle = () => {
    alert('구글 로그인');
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
          />
        </View>
        <InputId onInputChange={handleInputId} />
        <InputPassword onInputChange={handleInputPassword} />
        <MyButton
          style={styles.buttonItem}
          text="로그인"
          color="#47E1A8"
          width={100}
          height={50}
          onPress={getLogin}
        />
        <MyButton
          style={styles.buttonItem}
          text="회원가입"
          color="#47E1A8"
          width={100}
          height={50}
          onPress={goSignIn}
        />
        <MyButton
          style={styles.buttonItem}
          text="구글 로그인"
          color="grey"
          width={200}
          height={50}
          onPress={getSignInGoogle}
        />
        <MyButton
          style={styles.buttonItem}
          text="카카오 로그인"
          color="yellow"
          width={200}
          height={50}
          onPress={getSignInKakao}
        />
        <Text>아이디 : {inputId}</Text>
        <Text>비밀번호 : {inputPassword}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'green',
  },
  image: {
    width: 300,
    height: 200,
    // marginBottom: 10,
    marginTop: 20,
  },
  imageContainer: {
    // alignItems: 'center',
    // paddingBottom: 100,
  },
  loginButton: {
    backgroundColor: 'green',
  },
  buttonItem: {
    marginVertical: 10,
  },
});

export default Login;
