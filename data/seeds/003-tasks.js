/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('tasks').del();
  await knex('tasks').insert([
    { task_description: 'Set up project repository', task_notes: 'Create GitHub repository', task_completed: 1, project_id: 1 },
    { task_description: 'Design the homepage', task_notes: 'Figma design needed', task_completed: 0, project_id: 1 },
    { task_description: 'Develop user authentication', task_notes: '', task_completed: 0, project_id: 2 },
    { task_description: 'Optimize SQL queries', task_notes: 'Improve query performance', task_completed: 1, project_id: 3 },
  ]);
};
