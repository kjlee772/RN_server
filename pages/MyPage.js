// 공부한거 바탕으로 SQL사용해보는 페이지

import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const MyPage = () => {

  return (
    <View>
        <Text>Hello</Text>
    </View>
  );
};

export default MyPage;