import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../infrastructure/index';

const styles = StyleSheet.create({
  input: {
    padding: 20,
    backgroundColor: 'white',
  },
  container: {
    padding: 5
  }
});

export default function InputField({ placeholder, secureText }) {
  const [inputValue, setInputValue] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        elevation={5}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureText}
      />
    </View>
  );
}


// export default InputField;