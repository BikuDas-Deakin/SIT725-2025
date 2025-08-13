// seed.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB2')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Connection error:', err));

// Define schema and model
const Project = mongoose.model('Project', new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
}));

// Sample projects
const sampleProjects = [
  {
    title: "Kitten 2",
    image: "images/CAT2.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/CAT3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3"
  },
  {
    title: "Kitten 4",
    image: "images/CAT4.jpg",
    link: "About Kitten 4",
    description: "Demo description about kitten 4"
  }
];

// Insert sample data
Project.insertMany(sampleProjects)
  .then(() => {
    console.log("Sample projects saved!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error saving projects:", err);
    mongoose.connection.close();
  });
