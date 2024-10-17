const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
const port = process.env.PORT || 3029;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using the latest recommended options
mongoose.connect('mongodb+srv://trixuan:QTgsb94nDJJBvqYd@cluster0.1jpmz.mongodb.net/Online-Marketplace?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
  app.get('/', (req, res) => {
    res.send('Welcome to the Online Marketplace API');
  });
  app.use('/api/products', productRoutes);
  
  app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});