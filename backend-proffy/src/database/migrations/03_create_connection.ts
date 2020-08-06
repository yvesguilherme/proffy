import Knex from 'knex';

// Alterações que deverão ser realizadas no banco de dados.
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();

    // Relacionamento de tabela
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') // SE ALTERAR O ID DO USUÁRIO, REFLETIRÁ EM TODO DB
      .onDelete('CASCADE'); // DELETARÁ TODA A ÁRVORE LIGADA A ESTE USUÁRIO

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

// Rollback das alterações.
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}