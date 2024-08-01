import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function App() {
  const ToDoWork = [
    {id: 1, task: "Finish and submit MAST ICE Task 1"},
    {id: 2, task: "Complete designing website for WIL project"},
    {id: 3, task: "Help to cook dinner"},
    {id: 4, task: "Pack bag for tomorrow"},
  ]
  return (
   
  <View style={styles.ViewStyle}>
    <Text style={styles.headingText}> To do list:</Text>
    <FlatList
    style={styles.ListView}
      data={ToDoWork}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
            <Text style={styles.subHeading}>Task: {item.id}</Text>
            <Text style={styles.subHeading}>{item.task}</Text>
        </View>)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
  </View>
       );
    }

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer:{
    flex: 1,
    padding: 20,
    marginVertical: 1,
    backgroundColor: '#00B8D4',
  },
  headingText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    height: 20,
  },
  ListView: {
    maxHeight:800,
  },
  
});
export default App;


