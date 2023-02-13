import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { API_URL, API_TOKEN } from '@env';

export default function App() {
 
  
  const [selectedValue, setSelectedValue] = useState('');
  const objRate = {}

  const getRate = () => {
    fetch(`${API_URL}/users`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    })
    .then(response => response.json())
    .then(responseJson => setRate(responseJson.objRate))
    .catch(error => { 
      Alert.alert('Error', error.message); 
    });    
  }

  const convertValue {

  }

  const ItemSeparator = () => 
  <View style={{
      height: 1,
      width: "100%",
      backgroundColor: "grey"
    }}
    /> 

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Picker
        selectedValue={getRate}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button title = "Convert" onPress = {convertValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
