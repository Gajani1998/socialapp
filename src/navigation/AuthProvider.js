import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            Alert.alert( error.name,
              error.message);
          }
        },
                
        register: async (email, password,fname) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              
              firestore().collection('users').doc(auth().currentUser.uid)
              .set({
                  fname: fname,
                  email: email,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: null,
              })

              
              
              .catch(error => {
                 Alert.alert('Something went wrong with added user to firestore: ', error);
              })
            })
           
            .catch(error => {
               Alert.alert('Something went wrong with sign up: ', error);
            });
          } catch (e) {
            Alert.alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
           Alert.alert(e);
          }//#C90A2D  #FFF051  #ADA180
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
