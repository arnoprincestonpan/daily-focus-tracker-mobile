import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const Separator = () => <View style={styles.separator}/>;

  const [goals, setGoals] = useState([
    { id: 1, date: 1696886400000, text: "Take a shower.", completed: false},
    { id: 2, date: 1696886400000, text: "Read a book.", completed: false},
    { id: 3, date: 1696713600000, text: "Eat some food.", completed: false},
    { id: 4, date: 1696627200000, text: "Clean the apartment.", completed: false},
    { id: 5, date: 1696886400000, text: "Talk to friends and family.", completed: false}
  ]);

  const [newGoal, setNewGoal] = useState("");

  return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Daily Focus Tracker</Text>
      <View>
        <View style={styles.addCard}>
          <TextInput
            style={styles.input}
            placeholder="Enter your focus goal."
          />
          <Button title="Add Goal"/>
        </View>
        <Separator/>
        <Text style={styles.subtitle}>Today's Goals</Text>
        <FlatList
          data={goals}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.goalItems}>
                <Text>{item.text}</Text>

                <View style={styles.goalButtons}>
                  {item.completed ? 
                    <Button color="green" title="Completed"/>
                    :
                    <Button color="red" title="InComplete"/>
                  }
                  <Button color="#FF7700" title="Edit"/>
                  <Button color="#c00000" title="Delete"/>
                </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addCard: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  goalItems: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 10,
  },
  goalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalButton: {
    padding: 10,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
