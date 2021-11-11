import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();

const AuthStack = () => {
  
  return (
    <Stack.Navigator initialRouteName={"Welcome"}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#FF3C85',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        headerLeft: () => (
          <View style={{flexDirection: "row"}}>
          <View style={{marginLeft: 10,marginTop:10}}>
            <Ionicon 
              name="arrow-back-outline"
              size={30}
              backgroundColor="#f9fafd"
              color="#FFF"
              onPress={() => navigation.navigate('Welcome')}
            />
             </View>
            <View style={{ marginLeft: 125, marginTop: 10 }}>
              <Text style={styles.title}>Sign In</Text>
              </View>
       
          </View>
          )
        })}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#FF3C85',
           
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{flexDirection: "row"}}>
            <View style={{marginLeft: 10,marginTop:10}}>
              <Ionicon 
                name="arrow-back-outline"
                size={30}
                color="#FFF"
                onPress={() => navigation.navigate('Login')}
              />
               </View>
              <View>
                <Text style={styles.text}>Create an account</Text>
                </View>
         
            </View>
           
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
const styles = StyleSheet.create({
text: {
  fontFamily: 'Kufam-SemiBoldItalic',
  fontSize: 22,
  marginBottom: 20,
  color: '#FFF',
  marginLeft:70,
  textAlign:'center',
  marginTop:7,
  fontWeight:'bold',
},
title: {
  color: "white",
  fontSize: 23,
  fontWeight: "bold"
},
})