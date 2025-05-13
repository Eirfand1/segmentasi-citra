/**
 * @param {import('knex')} knex
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.text('password_hash').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('uploads', table => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.string('file_name').notNullable();
    table.text('file_path').notNullable();
    table.timestamp('uploaded_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('segmentations', table => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('upload_id').references('id').inTable('uploads').onDelete('CASCADE');
    table.string('model_version').notNullable();
    table.text('result_path').notNullable();
    table.enum('status', ['pending', 'done', 'failed']).defaultTo('pending');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('labels', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('color').notNullable(); // contoh: #FF0000
  });
};

/**
 * @param {import('knex')} knex
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('labels');
  await knex.schema.dropTableIfExists('segmentations');
  await knex.schema.dropTableIfExists('uploads');
  await knex.schema.dropTableIfExists('users');
};
