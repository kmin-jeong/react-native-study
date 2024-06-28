import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet, FlatList} from 'react-native';
import Add from './Add';
import Items from './Items';
import {RouteProp} from '@react-navigation/native';
import COLORS, {Theme} from '../style/style';
import {useThema} from '../store/ThemeStore';
import Checks from '../asset/Check';
import Trash from '../asset/Trash';

type TodoList = {
  Home: {todo: {id: string; text: string}} | undefined;
  Add: undefined;
  Setting: undefined;
};

type HomeScreen = RouteProp<TodoList, 'Home'>;

interface HomeProps {
  route: HomeScreen;
}

interface Todoitems {
  id?: string | any;
  text?: string;
  completed?: boolean;
}

export default function Home({route}: HomeProps) {
  const [todos, setTodos] = useState<Todoitems[]>([
    {text: '아침먹기', id: '1'},
    {text: '수영하기', id: '2'},
    {text: '잠자기', id: '3'},
  ]);
  const {themeColor} = useThema();

  //  some or every??? -> some
  useEffect(() => {
    if (route.params?.todo) {
      const todo = todos.some(todo => todo.id === route.params?.todo.id);

      if (!todo) {
        setTodos(prevTodos => [
          ...prevTodos,
          {...route.params?.todo, completed: false},
        ]);
      }
    }
  }, [route.params?.todo]);

  // 삭제
  const handleDelete = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 완료
  const handleComplete = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.todoitem,
            item.completed && {backgroundColor: themeColor},
          ]}
          onPress={() => handleComplete(item.id)}>
          <View style={styles.checkboxContainer}>
            <View
              style={[
                styles.checkbox,
                item.completed
                  ? {backgroundColor: COLORS.white, borderColor: themeColor}
                  : {borderColor: themeColor},
              ]}>
              {item.completed && <Checks />}
            </View>
            <Text
              style={[
                styles.todoText,
                item.completed && {color: COLORS.white},
              ]}>
              {item.text}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleDelete(item.id)}
            style={{marginRight: 20}}>
            <Trash />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: '5%',
  },

  listContainer: {
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoitem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    borderRadius: 18,
    width: '85%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: COLORS.white,
  },

  checkbox: {
    width: 20,
    height: 20,
    marginLeft: 20,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  todoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
  },
});
