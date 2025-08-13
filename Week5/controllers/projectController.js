const Project = require('../models/projectModel');

// GET all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Error fetching projects", error: err.message });
  }
};

module.exports = { getAllProjects };
