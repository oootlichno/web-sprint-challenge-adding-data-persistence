/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('projects').del();
   await knex('projects').insert([
    { project_name: 'Build a website', project_description: 'Create a website for a client', project_completed: 0 },
    { project_name: 'Mobile app development', project_description: 'Develop a mobile app for a startup', project_completed: 0 },
    { project_name: 'Database optimization', project_description: 'Improve performance of existing database', project_completed: 1 },
  ]);
};
