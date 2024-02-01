import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import {
  Title,
  List,
  FAB
} from 'react-native-paper';
import format from 'date-fns/format';
import { useNavigation } from '@react-navigation/native';

const memos = [
  {
    text: "メモメモメモ",
    createdAt: 1585574700000, // 2020.03.30 22:25
  },
  {
    text: "メモメモメモ",
    createdAt: 1585567500000, // 2020.03.30 20:25
  },
  {
    text: "長いメモメモメモメモメモメモメモメモメモメモメモメモメモメモ",
    createdAt: 1585459500000, // 2020.03.29 14:25
  },
  {
    text: "メモメモメモ",
    createdAt: 1585369500000, // 2020.03.28 13:25
  },
  {
    text: "メモメモメモ",
    createdAt: 1585275900000, // 2020.03.27 11:25
  },
];

function convertCreatedAt(createdAt) {
  return format(createdAt, 'yyyy.MM.dd HH:mm');
}

export default function Main() {
  const navigation = useNavigation();
  const onPressAdd = () => {
    navigation.navigate('Compose');
  }
  return (
    <View style={styles.container}>
      <Title>ここはメイン画面です</Title>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => `${item.createdAt}-memo-item`}
        renderItem={({ item }) => {
          return (
            <List.Item
              title={item.text}
              titleNumberOfLines={5} // 5行までは折り返して画面内に収まるようにする
              description={`作成日時: ${convertCreatedAt(item.createdAt)}`}
              descriptionStyle={{ textAlign: 'right' }}
            />
          );
        }}
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