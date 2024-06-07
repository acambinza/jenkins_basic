const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('CI CD / Jenkins!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data' });
});

app.post('/api/data', (req, res) => {
  const newData = req.body;
  res.status(201).json({ message: 'Data received', data: newData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
