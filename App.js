import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import SQLite from 'react-native-sqlite-storage';

export default class App extends React.Component{
  constructor(props){
    console.log("constructor")
    super(props);
    const db = SQLite.openDatabase(
      {
        name: 'MYDB.db',
        location: 'default',
        createFromLocation: '~www/MYDB.db',
      },
      () => {},
      error => {
        console.log(error);
      }
    );
    this.state={
      db,
      users: [],
    }
  }

  componentDidMount() {
    console.log("mount")
    const { db } = this.state;

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM info;', [], (tx, results) => {
        const rows = results.rows;
        const users = rows.raw().map(v => v);
        this.setState({users});
      });
    });
  }
  componentWillUnmount() {
    console.log("unmount")
    const { db } = this.state;
    db.close();
  }

  render(){
    console.log("render")
    return(
      <View>
        <Text>HELLO</Text>
      </View>
    )
  }
}
