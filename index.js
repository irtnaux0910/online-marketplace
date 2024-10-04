const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3029;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://trixuan:QTgsb94nDJJBvqYd@cluster0.1jpmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);