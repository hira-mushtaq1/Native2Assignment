import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

export default function Login1() {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?w=2000',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={{alignItems: 'center', marginTop: 300}}>
          <TextInput style={styles.txtField} placeholder="abc@gmail.com" />
          <TextInput style={styles.txtField} placeholder="xxxxxxxx" />

          <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', fontSize: 22}}>Login </Text>
          </TouchableOpacity>

          <Text>Forgot Password ?</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  txtField: {
    borderWidth: 2,
    width: '80%',
    borderRadius: 18,
    padding: 8,
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: 'maroon',

    borderRadius: 15,
    padding: 8,
    width: '40%',
    marginVertical: 15,
    alignItems: 'center',
  },
});
