const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')

const items = [{
  text: "hello",
  image: "hello",
  description: "hello"
}]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

app.get('/', (req, res) => {
    res.send("hello");
});

app.get('/items', (req, res) => {
    res.send({ items });
});

app.get('/api/items', (req, res) => {
  res.send({ items });
});

app.post('/api/items', (req, res) => {
  console.log("BODY:", req.body)
  const newItem = {text: req.body.text, image: req.body.image, description: req.body.description}

  items.push(newItem);

  res.send({ items });
});

app.listen(port, () => console.log(`Listening on port ${port}`));