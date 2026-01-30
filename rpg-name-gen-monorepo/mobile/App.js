import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Picker, StyleSheet } from 'react-native';

export default function App() {
  const [category, setCategory] = useState('Fantasy Heroes');
  const [name, setName] = useState('');

  const categories = [
    'Fantasy Heroes',
    'Elven Names',
    'Dwarven Names',
    'Dragon Names',
    'Demon Lords',
    'Ancient Wizards',
    'Tavern Names',
    'Guild Names'
  ];

  import names from '../shared/names.json';

const generateName = () => {
  const categoryNames = names[category.replace(/ /g, '')] || [];
  if (categoryNames.length === 0) {
    setName('No names available for this category');
    return;
  }
  const randomName = categoryNames[Math.floor(Math.random() * categoryNames.length)];
  setName(randomName);
};

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>RPG Name Generator</Text>
        <Picker
          selectedValue={category}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          {categories.map(cat => <Picker.Item label={cat} value={cat} key={cat} />)}
        </Picker>
        <Button title="Generate Name" onPress={generateName} />
        {name ? <Text style={styles.result}>Generated Name: {name}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  result: {
    marginTop: 20,
    fontSize: 18
  }
});
