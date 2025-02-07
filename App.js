import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const goals = [
    { id: 1, date: 1696886400000, text: "Take a shower.", completed: false},
    { id: 2, date: 1696886400000, text: "Read a book.", completed: false},
    { id: 3, date: 1696713600000, text: "Eat some food.", completed: false},
    { id: 4, date: 1696627200000, text: "Clean the apartment.", completed: false},
    { id: 5, date: 1696886400000, text: "Talk to friends and family.", completed: false}
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Focus Tracker</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter your focus goal."
        />
        <Button title="Add Goal"/>
        <Text style={styles.subtitle}>Today's Goals</Text>
        <FlatList
          data={goals}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
                <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  }
});
