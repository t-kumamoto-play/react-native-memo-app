import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { save } from '../store/Store';
import { useNavigation } from '@react-navigation/native';

export default function ComposeScreen() {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const onPressSave = async (e) => {
    await save(text, Date.now());
    navigation.goBack();
  }

  return (
    // <View style={styles.container}>
    //   <Text>メモ作成画面</Text>
    // </View>

    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        onChangeText={(text) => setText(text)}
      />
      <Button
        mode="contained"
        onPress={onPressSave}
      >
        保存
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  textInput: {
    marginBottom: 16,
    paddingVertical: 10
  }
});