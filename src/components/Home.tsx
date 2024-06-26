import {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet, FlatList} from 'react-native';
import Add from './Add';
import Items from './Items';

export default function Home() {
  const [todos, setTodos] = useState([
    {text: '아침먹기', key: '1'},
    {text: '아침먹기', key: '2'},
    {text: '아침먹기', key: '3'},
  ]);

  const pressHandler = (key: any) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text: any) => {
    setTodos(prevTodos => {
      return [{text: text, key: Math.random().toString()}, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Add submitHandler={submitHandler}></Add>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Items item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
