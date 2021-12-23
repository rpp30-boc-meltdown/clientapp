import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../infrastructure/colors';
import { render } from 'react-dom';


const styles = StyleSheet.create({
  currentSessionHeader: {
    backgroundColor: colors.brand.kazan,
    height: 120,
  },
  restaurantName: {
    color: 'white',
    fontSize: 15,
  },
  profile: {
    flex: 1,
    flexBasis: '30%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%'
  },
  currentSessionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  restaurant: {
    flexBasis: '70%',
  },
  accountTypeText: {
    color: 'white',
  },
  accountHolderName: {
    color: 'white',
  }
});

const CurrentSessionHeader = () => {
  return (
    <Appbar.Header style = {styles.currentSessionHeader}>
      <View style = {styles.currentSessionContainer}>
        <View style = {styles.restaurant}>
          <Text style = {styles.restaurantName}>
            BRAZILIAN RESTAURANT BREWING
          </Text>
        </View>
        <View style={styles.profile}>
          <View>
            <Text style = {styles.accountTypeText}>HOST</Text>
          </View>
          <View>
            <Avatar.Image source={require('../../../assets/profilePicture.png')} />
          </View>
          <View>
            <Text style = {styles.accountHolderName}>Susan</Text>
          </View>
        </View>
      </View>
    </Appbar.Header>
  );
};

export default CurrentSessionHeader;