import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  TextInput,

} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../navigation/AuthProvider';
import { Icon } from 'react-native-elements'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useContext(AuthContext);

  return (


    <ScrollView contentContainerStyle={styles.container}>



      <View style={{ alignItems: "center", marginTop: 35, marginBottom: 10 }}>
        <Text style={styles.text1} >Please enter the email and password</Text>
        <Text style={styles.text1} >registered with your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="user" size={25} color="#666" />
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

      <TouchableOpacity style={styles.buttonContainer} onPress={() => login(email, password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={
          { fontSize: 17, fontWeight: 'bold', color: '#FF3C85' }
        }>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  text1: {
    color: '#86939e',
    fontSize: 16
  },
  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold"
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  forgotButton: {
    marginVertical: 5,
    marginLeft: 180,
  },
  signup: {
    marginVertical: 15,
    marginRight: 60,
    marginLeft: 25
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#FF3C85",
    height: 50,
    width: 410

  },

  headerText: {
    color: "blue",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15

  },

  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
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
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },

});
