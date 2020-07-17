import React , {Component} from 'react';
import babi  from './babi.jpeg';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  Image,
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

function App() {

return <Testing/>
};


function Testing() {
  return <View  >
    <Text style={styles.text}>
      Belajar styling
    </Text>
    <Belanja/>
  </View>
  
}


function Sample() {
  return<View style={{width:80}}>
  <Text> HHH</Text>
  <Profile/>
  <Text> kkkk</Text>
  <Text >popop </Text>
  <Gambar/>
  <Home/>
  <TextInput style={{borderWidth:1}} />
  < BoxHijau / >

</View>
  
}

function Home() {
  return <View>
    <Text>
      Testing....
    </Text>
  </View>
  
}

function Gambar() {
  return <Image 
  style = {
    styles.tinyLogo
  }
  source = {
    {
     babi
    }
  }
  />
  
}

class BoxHijau extends Component{
  render(){
    return <View>
      <Text>
        Hello M*therF*cker....
      </Text>
    </View>
  }
}
class Profile extends Component{
  render(){
    return<View><Text>Hello Bicth</Text>
    </View>
  }
}
function Belanja() {
  
    return <View style = {
      styles.Luar
    } >
      <Image
      style = {
        styles.tinyLogo
      }
      source = {
        {
          uri: 'https://placeimg.com/640/480/tech'
        }
      }
      />

      <Text style={styles.BawahTeks}>Headset Ori</Text>
      <Text style={styles.Harga}>Rp. 300.000</Text>
      <Text style={styles.Alamat}>Jakarta Barat</Text>
      <View View style = {
        styles.TombolBg
      } >
        <Text style={styles.Tombol}>
          BELI
        </Text>
      </View>
    </View>
  
}
const styles = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'bold',
    textShadowColor:'blue',
    color:'blue',
    marginLeft:100
  },
  tinyLogo:{
    width:188,
    height:107,
    borderRadius:8,
    
  },
  Luar:{
    padding:12,
    backgroundColor:'#f2f2f2f2',
    width:212
  },
  BawahTeks:{
    fontSize:14,fontWeight:'bold', marginTop:14
  },
    Harga: {
      color:'#f2994a',
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 7
    },
    Alamat: {
      color: '#f2224a',
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 7
    },
    TombolBg: {
      backgroundColor: '#6fcf97',
        marginTop: 20,
      borderRadius: 20

    },
     Tombol: {
      fontSize:14,
      fontWeight:'600',
      color:'white',
      textAlign:'center',
      paddingTop:6,
      paddingBottom:6,
     }
});



export default App;
