import {DarkTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const deviceWidth = Dimensions.get('window').width;

const App = () => {
  // # first variable, Second is function how will update value of a variable
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState();
  const addNote = () => {
    if (note.length !== 0) {
      var notesCopy = notes;
      notesCopy.push(note);
      setNotes(notesCopy);

      setNote('');
    }
  };
  return (
    <View>
      <View>
        <Text style={styles.heading}>Task Manager</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Add your task ...."
            style={styles.field}
          />
        </View>
        <View>
          <TouchableOpacity onPress={addNote}>
            <Text
              style={{
                fontSize: 30,
                height: 50,
                width: 50,
                textAlign: 'center',
                paddingTop: 2,
                backgroundColor: 'grey',
                borderRadius: 50,
                color: 'white',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {notes.length === 0 ? (
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
            borderTopColor: 'black',
            borderWidth: 1,
            borderBottomColor: 'transparent',
          }}>
          No Task Added !
        </Text>
      ) : (
        <View>
          {notes.map((note, index) => (
            <Text key={index} style={{ margin: 16, borderRadius: 40, padding: 10, fontSize: 22, elevation: 4, backgroundColor: 'white'}}>
              {note}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    marginVertical: 40,
    width: deviceWidth,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'blue',
    color: 'blue',
    textShadowRadius: 2,
  },

  field: {
    borderColor: 'black',
    borderWidth: 1,
    width: 3 * (deviceWidth / 4),
    borderRadius: 20,
    paddingLeft: 20,
  },
});
export default App;
