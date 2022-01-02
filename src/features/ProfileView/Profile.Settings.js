import React, { useContext } from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { colors } from '../../infrastructure/colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BiteShareContext } from '../../BiteShareContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5
  },
});

const SettingButton = () => {
  // const { state: { accountHolderName }, dispatch } = useContext(BiteShareContext);


  return (
    <View style={styles.container}>

      {/* Scrollable list of previous bites */}
      <Text>Account Settings</Text>
      <Text>Personal Informaton {'>'}</Text>


    </View>
  );
};

export default SettingButton;