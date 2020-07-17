import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {



  return (
    <View>
      <Text>
        Masukan Nama Anda:
      </
      
      
      Text>
      
      <TextInput TextInput placeholder= "usernamenya  " >
      </TextInput>
      <Text>
        Msukan Password
      </Text>
      <TextInput placeholder="passwordnya nyonya...">

      </TextInput>














      
            <Button
            title = "Tombol..."
            color = "#f194ee"
            onPress = {
              () => Alert.alert('Herdisk Gila.....')
            }
            />
    </View>

  );
};







const styles = StyleSheet.create({
  teksku: {
    backgroundColor: Colors.lighter,
  },
  teksku: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
    teksku: {
      color: Colors.dark,
      fontSize:52,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
});

export default App;
