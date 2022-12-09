import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function Routing({navigation}) {
  let moveScreen = route => {
    navigation.navigate(route);
  };

  return (
    <View style={[styles.flexCenter, styles.h100]}>
      <Text
        style={[
          styles.fs1,
          styles.textDanger,
          styles.borderBottom1,
          styles.borderDanger,
        ]}>
        Shopping App
        <Icon name="shopping-bag" size={30} color="#900" />
      </Text>
      <View>
        <TouchableOpacity
          style={[styles.btn, styles.flexRow, styles.flexCenter, styles.my2]}>
          <Text style={[styles.textWhite, styles.fs4]}>Add To Cart</Text>
          <Icon name="shopping-cart" size={30} color={styles._white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveScreen('Product')}
          style={[styles.btn, styles.flexRow, styles.flexCenter, styles.my2]}>
          <Text style={[styles.textWhite, styles.fs4]}>Products</Text>
          <Icon name="category" size={30} color={styles._white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveScreen('OrderScreen')}
          style={[styles.btn, styles.flexRow, styles.flexCenter, styles.my2]}>
          <Text style={[styles.textWhite, styles.fs4]}>Orders</Text>
          <Icon name="description" size={30} color={styles._white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Routing;
