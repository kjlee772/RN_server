import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <View>
        <Text>HELLO</Text>
        <TextInput multiline={true} />
      </View>
    )
  }
}