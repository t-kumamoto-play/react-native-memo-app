import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function ComposeScreen() {
  const [text, setText] = useState("");
  const onPressSave = (e) => {
    // TODO
  }

  return (
    // <View style={styles.container}>
    //   <Text>メモ作成画面</Text>
    // </View>

    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={{ marginBottom: 16 }}
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
  }
});