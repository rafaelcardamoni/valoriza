import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.post('/', (request, response) => {
  return response.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running');
});
