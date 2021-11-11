import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,TextInput, ScrollView,} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import { windowHeight} from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fname, setFname] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    < ScrollView style={styles.container}>
      

      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="user" size={25} color="#666" />
        </View>
        <TextInput
          value={fname}
          style={styles.input}
          numberOfLines={1}
          placeholder="FullName"
          placeholderTextColor="#666"
          keyboardType="text"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(userFname) => setFname(userFname)}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="mail" size={25} color="#666" />
        </View>
        <TextInput
          value={email}
          style={styles.input}
          numberOfLines={1}
          placeholder="Email"
          placeholderTextColor="#666"
          onChangeText={(userEmail) => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="lock" size={25} color="#666" />
        </View>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="lock" size={25} color="#666" />
        </View>
        <TextInput
          value={confirmPassword}
          style={styles.input}
          placeholder="ConfirmPassword"
          placeholderTextColor="#666"
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer}  onPress={() => register(email, password,fname)}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>

      

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#FF3C85'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#FF3C85'}]}>
          Privacy Policy
        </Text>
      </View>

      <View style ={{alignItems:"center",marginTop:5, marginBottom:30}}>
                <Text style ={{fontSize:20, fontWeight:"bold",color:'#FF3C85'}}>OR</Text>
            </View> 
      <TouchableOpacity
        style={{alignItems:"center"}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'#FF3C85',fontSize:20,fontWeight:'bold'}}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </ ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
   marginTop:60,
  // alignItems:'center',
  // justifyContent:'center'
    
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:'center',
    marginLeft:10
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    height: windowHeight / 15,
    backgroundColor: '#FF3C85',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginLeft:18
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
