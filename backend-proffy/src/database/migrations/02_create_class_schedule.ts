import Knex from 'knex';

// Alterações que deverão ser realizadas no banco de dados.
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary();
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    // Relacionamento de tabela
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE') // SE ALTERAR O ID DO USUÁRIO, REFLETIRÁ EM TODO DB
      .onDelete('CASCADE'); // DELETARÁ TODA A ÁRVORE LIGADA A ESTE USUÁRIO
  });
}

// Rollback das alterações.
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}