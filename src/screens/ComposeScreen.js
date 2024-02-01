import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function ComposeScreen() {
  return (
    <View style={styles.container}>
      <Text>メモ作成画面Ï</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});