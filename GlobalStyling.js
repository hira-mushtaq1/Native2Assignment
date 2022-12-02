import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'maroon',
    color: 'white',
    padding: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonBox: {
    marginVertical: 10,
    alignItems: 'center',
    fontSize: 15,
    padding: 10,
    borderRadius: 25,
  },
  card: {
    margin: 30,
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 15,
    color: 'black',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  ShadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      color: 'black',
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  txtField: {
    borderWidth: 2,
    width: '80%',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 15,
  },
  btn: {
    backgroundColor: 'maroon',
    width: '80%',
    borderRadius: 20,
    padding: 12,
    marginVertical: 15,
    alignItems: 'center',
  },
});

export default styles;
