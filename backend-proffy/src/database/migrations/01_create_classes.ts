import Knex from 'knex';

// Alterações que deverão ser realizadas no banco de dados.
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // Relacionamento de tabela
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') // SE ALTERAR O ID DO USUÁRIO, REFLETIRÁ EM TODO DB
      .onDelete('CASCADE'); // DELETARÁ TODA A ÁRVORE LIGADA A ESTE USUÁRIO
  });
}

// Rollback das alterações.
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}

// 01:20:40