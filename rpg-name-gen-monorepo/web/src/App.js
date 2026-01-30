import React, { useState } from 'react';

function App() {
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

  import names from '../../shared/names.json';

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
    <div style={{ padding: 20 }}>
      <h1>RPG Name Generator</h1>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <button onClick={generateName} style={{ marginLeft: 10 }}>Generate Name</button>
      <div style={{ marginTop: 20 }}>
        {name && <p><strong>Generated Name:</strong> {name}</p>}
      </div>
    </div>
  );
}

export default App;
