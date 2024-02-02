// react-nativeの内蔵モジュールでローカルストレージにデータを保存する

import AsyncStorage from "@react-native-async-storage/async-storage";

export const save = async (text, createdAt) => {
  const key = `${createdAt}`;
  const value = JSON.stringify({
    text,
    createdAt
  });

  await AsyncStorage.setItem(key, value);
}

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList = await AsyncStorage.multiGet(keys);
  const data = entryList.map(entry => JSON.parse(entry[1]));
  return data;
}