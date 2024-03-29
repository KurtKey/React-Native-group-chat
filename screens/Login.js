import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements"
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user : exist")
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
      <StatusBar style="light" />
      {/* <Image 
      source={{ 
        uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png",
      }}
        style={{ width: 200, height: 200 }}
      /> */}
      <Image source={require('../assets/keychat_logo.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          cursorColor={"#B09955"}
          autoFocus
          type="email"
          value={email}
          onChangeText={text => setEmail(text)} />
        <Input
          placeholder='Password'
          cursorColor={"#B09955"}
          secureTextEntry
          type="password"
          value={password}
          onChangeText={pass => setPassword(pass)}
          onSubmitEditing={signIn}
        />
      </View>

      <Button
        containerStyle={styles.button1}
        type="outLine"
        titleStyle={{ color: '#fff' }}
        onPress={signIn}
        title="Login" />
      <Button
        onPress={() => navigation.navigate('Register')}
        containerStyle={styles.button2}
        type="outLine"
        titleStyle={{ color: '#B09955' }}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button1: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#B09955",
  },
  button2: {
    width: 200,
    marginTop: 10,
  }
});