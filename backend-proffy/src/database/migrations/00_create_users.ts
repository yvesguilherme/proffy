import Knex from 'knex';

// Alterações que deverão ser realizadas no banco de dados.
export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// Rollback das alterações.
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}