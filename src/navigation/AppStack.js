import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Feed"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#FFF',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 22,
          fontWeight:'bold',
         
        },
        headerStyle: {
          shadowColor: '#FF3C85',
          elevation: 0,
          backgroundColor:'#FF3C85'
        },
        
      }}
    />
    
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
const AddPostStack = ({navigation}) => (
  <Stack.Navigator>
   <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          shadowColor: '#FF3C85',
          elevation: 0,
          backgroundColor:'#FF3C85'
        },
        headerLeft: () => (
          <View style={{flexDirection: "row"}}>
          <View style={{marginLeft: 10,marginTop:10}}>
            <Ionicons 
              name="arrow-back-outline"
              size={30}
              backgroundColor="#f9fafd"
              color="#FFF"
              onPress={() => navigation.navigate('Home')}
            />
             </View>
            <View style={{ marginLeft: 110, marginTop: 10 }}>
              <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>Share Posts</Text>
              </View>
       
          </View>
          )
      
        
      }}
    />

   
  </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages"
     component={MessagesScreen} 
    options={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#FFF',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 22,
        fontWeight:'bold',
      },
      headerStyle:{
        
        backgroundColor:'#FF3C85',
        color:'#FFF',
      }
    }}
     />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
        headerStyle:{
          backgroundColor:'#FF3C85'
        },
        headerTitleStyle: {
          color: '#FFF',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 22,
          fontWeight:'bold',
        },
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#FFF',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 22,
          fontWeight:'bold',
        },
        headerStyle:{
          
          backgroundColor:'#FF3C85',
          color:'#FFF',
        }
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF3C85',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      
       <Tab.Screen
        name="Post"
        component={AddPostStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color, size}) => (
            <Ionicons 
            name ='ios-add-circle'
            color ={color}
            size ={size}
        />
            
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
