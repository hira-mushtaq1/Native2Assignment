import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
  View,
} from 'react-native';
import styles from '../GlobalStyling';
import axios from 'axios';
import stylesNew from '../Styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function Home({navigation}) {
  let moveScreen = route => {
    navigation.navigate(route);
  };
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(success => {
        setData(success.data);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(data);

  return (
    <View style={{paddingBottom: 100, marginBottom: 25}}>
      <Text style={styles.header}>
        <Icon name="home" size={35} color="#ffff" />
        Home{' '}
      </Text>

      <View style={[styles.ShadowLight, InternalStyles.Inputs]}>
        <Image
          source={{
            uri: 'https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png',
          }}
          style={{width: 20, height: 15}}></Image>

        <TextInput
          placeholder="Search Here"
          placeholderTextColor={'black'}
          style={InternalStyles.InputField}></TextInput>
      </View>

      <ScrollView>
        <TouchableOpacity>
          {filter &&
            filter.length > 0 &&
            filter.map((e, i) => (
              <View key={i} style={[styles.card, styles.ShadowLight]}>
                <Image
                  source={{uri: `${e.image}`}}
                  style={{
                    width: '50%',
                    height: 200,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: 'black',
                  }}>
                  Rs/- {e.price}
                </Text>
                <Text>{e.title}</Text>
                <Text style={{fontWeight: 'bold'}}>{e.category}</Text>
              </View>
            ))}
        </TouchableOpacity>
      </ScrollView>

      <ScrollView>
        <TouchableOpacity>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {data &&
              data.length > 0 &&
              data.map((e, i) => (
                <View key={i} style={[styles.card, styles.ShadowLight]}>
                  <Image
                    source={{uri: `${e.image}`}}
                    style={{
                      width: '50%',
                      height: 150,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                      marginBottom: 5,
                      marginVertical: 15,
                    }}
                  />
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    Rs.{e.price}
                  </Text>
                  <Text
                    style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>
                    {e.title}
                  </Text>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    {e.category}
                  </Text>
                </View>
              ))}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const InternalStyles = StyleSheet.create({
  Headings: {
    color: 'white',
    fontSize: 50,
    zIndex: 2,
    alignSelf: 'center',
    fontWeight: '600',
    marginVertical: '20%',
  },

  Container: {
    backgroundColor: 'white',
    margin: 20,
    zIndex: 1,
    borderRadius: 20,
    padding: '7%',
  },

  Inputs: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 25,
    color: 'black',
  },

  InputField: {
    paddingHorizontal: 15,
    fontSize: 15,
    paddingVertical: 0,
    color: 'black',
  },
});
