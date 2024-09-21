/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('resources').del();
  
  await knex('resources').insert([
    { resource_name: 'React developer', resource_description: 'Frontend developer specializing in React' },
    { resource_name: 'Node.js developer', resource_description: 'Backend developer specializing in Node.js' },
    { resource_name: 'Database administrator', resource_description: 'Manages and optimizes databases' },
  ]);
};
