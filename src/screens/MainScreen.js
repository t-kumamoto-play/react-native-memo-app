import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import {
  Title,
  List,
  FAB
} from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import format from 'date-fns/format';
import { useNavigation } from '@react-navigation/native';
import { loadAll, removeItem } from '../store/Store';

function convertCreatedAt(createdAt) {
  return format(createdAt, 'yyyy.MM.dd HH:mm');
}

export default function Main() {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll();
      setMemos(newMemos);
    }
    const unsubscribe = navigation.addListener('focus', initialize);
    return unsubscribe;
  }, [navigation]);

  const onPressAdd = () => {
    navigation.navigate('Compose');
  }

  const deleteButton = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            width: 75,
            height: 70,
            backgroundColor: "#CC3333",
            padding: 10
          }}
          onPress={async () => {
            await removeItem(String(item.createdAt));
            const newMemos = await loadAll();
            setMemos(newMemos);
          }}
          key={item.createdAt}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title>ここはメイン画面です</Title>
      <SwipeListView
        data={memos}
        renderItem={({ item }) => {
          return (
            <List.Item
              style={{ backgroundColor: 'white' }}
              title={item.text}
              titleNumberOfLines={5} // 5行までは折り返して画面内に収まるようにする
              description={`作成日時: ${convertCreatedAt(item.createdAt)}`}
              descriptionStyle={{ textAlign: 'right' }}
            />
          );
        }}
        renderHiddenItem={deleteButton}
        rightOpenValue={-75}
        disableRightSwipe={true}
        keyExtractor={item => item.createdAt}
      />
      <FAB
        icon="plus"
        onPress={onPressAdd}
        style={styles.fab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16
  }
});