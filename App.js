// import React, { useEffect } from 'react';
// import { View, Text, TextInput } from 'react-native';

// import SQLite from 'react-native-sqlite-storage';

// export default class App extends React.Component{
//   constructor(props){
//     console.log("constructor")
//     super(props);
//     const db = SQLite.openDatabase(
//       {
//         name: 'MYDB.db',
//         location: 'default',
//         createFromLocation: '~www/MYDB.db',
//       },
//       () => {},
//       error => {
//         console.log(error);
//       }
//     );
//     this.state={
//       db,
//       users: null,
//     }
//   }

//   componentDidMount() {
//     console.log("mount")
//     const { db } = this.state;

//     db.transaction(tx => {
//       tx.executeSql('SELECT * FROM info;', [], (tx, results) => {
//         const rows = results.rows;
//         const users = rows.raw().map(v => v);
//         this.setState({users:users});
//         console.log(this.state.users)
//         console.log(this.state.users[0])
//       });
//     });
//   }
//   componentWillUnmount() {
//     console.log("unmount")
//     const { db } = this.state;
//     db.close();
//   }

//   save_to_do(){
//     db.transaction(tx => {
//       const instruction = 'SQL 문장';
//       tx.executeSql(instruction, [], (tx, results) => {
//         const rows = results.rows;
//         const data = rows.raw().map(v => v);
//       });
//     });
//   }

//   render(){
//     console.log("render")
//     return(
//       <View>
//         <Text>HELLO</Text>
//         {/* <Text style={{color:'black'}}>{this.state.users[0]}</Text> */}
//       </View>
//     )
//   }
// }


import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'View User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'View Users', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Update User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Register User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Delete User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;