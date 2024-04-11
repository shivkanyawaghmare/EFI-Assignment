const express = require('express')
const app = express()
const UserModels = require('./models/UserModels')
const UserRoutes =require('./routes/UserRoutes')
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware


const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://pawarshiv2023:shivkanya@cluster1.klsiueo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
