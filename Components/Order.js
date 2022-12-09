import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Styling';

function Order(navigation, route) {
  let ordersArr = [route.params];
  return (
    <>
      <View style={[styles.h100]}>
        <View style={styles.p2}>
          <Text style={[styles.fs2, styles.textPrimary]}>Orders</Text>
        </View>
        <View>
          {ordersArr.map((x, i) => (
            <View
              style={[
                styles.m1,
                styles.bgWhite,
                styles.rounded,
                styles.shadow1,
                styles.p1,
              ]}
              key={i}>
              <View
                style={[
                  styles.flexRow,
                  styles.w100,
                  styles.justifyContentBetween,
                ]}>
                <View style={styles.w20}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: x.image}}
                  />
                </View>
                <View style={styles.w50}>
                  <Text style={styles.fs5} noOfLines={1}>
                    {x.title}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.fs5, styles.textDanger]}>
                    Rs:{x.price} /-
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}
export default Order;
