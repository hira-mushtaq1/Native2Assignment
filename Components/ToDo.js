import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function ToDo() {
  let [txt, setTxt] = useState('');
  let [notes, setNotes] = useState([]);
  let [isEditing, setIsEditing] = useState(false);
  let [currentIndex, setCurrentIndex] = useState();

  const addNote = () => {
    if (txt) {
      setNotes([...notes, txt]);
      setTxt('');
    } else {
      alert('Must have some text');
    }
  };

  const del = index => {
    notes.splice(index, 1);
    setNotes([...notes]);
  };

  const delAll = () => {
    notes.length = 0;
    setNotes([...notes]);
  };

  const edit = index => {
    setIsEditing(true);
    setCurrentIndex(index);
    setTxt(notes[index]);
  };

  const saveChanges = () => {
    if (txt) {
      notes[currentIndex] = txt;
      setNotes([...notes]);
      setTxt('');
      setIsEditing(false);
    } else {
      alert('Must have some text');
    }
  };

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://philanthropynw.org/sites/default/files/styles/news_16x9__1920x1080/public/content_images/news/StudentStudying_1920x1080px.jpg?itok=mntjfbMz',
          }}
          style={styles.Imgback}>
          <Text style={styles.heading}> NOTES APP</Text>

          <View style={{margin: 20, color: 'black'}}>
            <View style={styles.flexDbba}>
              <TextInput
                value={txt}
                onChangeText={val => setTxt(val)}
                style={styles.inputField}
              />
              <Button
                onPress={isEditing ? saveChanges : addNote}
                title={isEditing ? ' Save ' : ' Add '}
                color="maroon"
              />
            </View>

            {notes.length > 0 ? (
              notes.map((e, i) => {
                return (
                  <View key={i} style={styles.parent}>
                    <Text key={i} style={styles.noteText}>
                      {e}
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => edit(i)}
                        style={styles.customBtn}>
                        <Text style={styles.edit}>Edit</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => del(i)}
                        style={styles.customBtn}>
                        <Text style={styles.delete}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={styles.notToDo}>Your Todo Will Show BELOW</Text>
            )}

            {notes.length > 0 && (
              <TouchableOpacity
                onPress={delAll}
                style={[styles.customBtn, styles.deleteAll]}>
                <Text style={styles.delete}>Delete All</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'maroon',
    fontSize: 40,
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  inputField: {
    borderWidth: 3,
    borderColor: 'gray',
    color: 'black',

    // paddingHorizontal: 20,
    // paddingVertical: 5,
    flex: 3,
  },
  flexDbba: {
    flexDirection: 'row',
    marginVertical: 50,
    padding: 10,

    overflow: 'hidden',
  },
  Btn: {
    flex: 1,
  },
  Imgback: {
    width: '100%',
    height: 1000,
  },

  parent: {flexDirection: 'row', marginVertical: 10},

  noteText: {
    backgroundColor: '#FFFDD0',
    color: 'maroon',
    padding: 10,
    flex: 4,
    marginRight: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  customBtn: {marginRight: 8, borderRadius: 25, overflow: 'hidden'},

  edit: {color: 'white', backgroundColor: 'darkgreen', padding: 13},

  delete: {color: 'white', backgroundColor: 'seagreen', padding: 13},

  notToDo: {textAlign: 'center', fontSize: 30, opacity: 0.2},

  deleteAll: {
    justifyContent: 'flex-start',
    marginVertical: 20,
    textAlign: 'center',
  },
});
