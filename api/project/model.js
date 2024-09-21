const db = require('../../data/dbConfig');

async function getProjects() {
  const projects = await db('projects');
  return projects.map(project => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => getProjectById(id));
}

function getProjectById(project_id) {
  return db('projects')
    .where({ project_id })
    .first()
    .then(project => ({
      ...project,
      project_completed: Boolean(project.project_completed),
    }));
}

module.exports = { getProjects, addProject, getProjectById };