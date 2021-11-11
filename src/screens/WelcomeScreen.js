import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' ,backgroundColor:'white'}} >


      <View style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: 90 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold',color:'#696666' }}>A New way to connect</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold',color:'#696666' }}> with the world.</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold',color:'#696666' }}>Share your thoughts </Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' ,color:'#696666'}}> with similar kind of people.</Text>
      </View>


      <View style={{marginTop:50}}>

        
          <View style={styles.slide1}>
            <Image
             source={require('../assets/images/sb.jpeg')}
              style={{ height: "100%", width: "100%",marginRight:35 }}
            />
          </View>

        
      </View>

      <View style={{ borderBottomColor: '#696666', borderBottomWidth: 3, marginTop: 145 }} />


      <View style={{  flexDirection: 'row', height:80,backgroundColor: "#FF3C85" }}>

        <TouchableOpacity 
        style={styles.styledButton}
         onPress={() => {
          navigation.navigate("Login")
        }}>
          <Text style={styles.buttonTitle}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.styledButton} 
        onPress={() => { navigation.navigate("Signup") }}
        >
          <Text style={styles.buttonTitle}>SIGN UP</Text>
        </TouchableOpacity>





      </View>


    </ScrollView>
  )
}


const styles = StyleSheet.create({

  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  styledButton: {
    backgroundColor: "#FF3C85",
    alignContent: "center",
    justifyContent:"space-evenly",
    height: 50,
    paddingHorizontal: 20,
    width: '70%'
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
    
  }

})