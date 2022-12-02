import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignUp() {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?w=2000',
        }}
        style={{width: '100%', height: '100%'}}>
        <Text
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 100,
            marginBottom: 20,
          }}>
          SignUp Today
        </Text>
        <View
          style={{
            backgroundColor: '#6c757d',
            marginTop: 100,
            borderTopLeftRadius: 50,
            borderTopEndRadius: 50,
            paddingHorizontal: '12%',
            height: '80%',
          }}>
          <View style={{paddingTop: 50}}>
            <Text style={styles.Title}>Enter Your Name: </Text>
            <View style={styles.shadow}>
              <TextInput
                style={styles.txtField}
                placeholder="Type Email Here"
              />
            </View>
            <Text style={styles.Title}>Enter Your Email</Text>
            <View style={styles.shadow}>
              <TextInput
                style={styles.txtField}
                placeholder="Type Email Here"
              />
            </View>

            <Text style={styles.Title}>Password</Text>
            <View style={styles.shadow}>
              <TextInput
                style={styles.txtField}
                placeholder="Type Password Here"
              />
            </View>

            <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'white', fontSize: 17}}>Login </Text>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 15,
                flexDirection: 'row',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 15}}>Don't Have an Account ? </Text>
              <Text
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  fontSize: 15,
                }}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  txtField: {
    padding: 8,
    paddingHorizontal: 20,
    fontSize: 15,
    color: 'black',
  },
  shadow: {
    width: '100%',
    elevation: 12,
    shadowColor: 'maroon',
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'maroon',
    width: '40%',
    marginStart: 80,
    borderRadius: 20,
    padding: 12,
    paddingHorizontal: 40,
    marginVertical: 15,
    alignItems: 'center',
  },
  Title: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 8,

    fontWeight: 'bold',
  },
});
