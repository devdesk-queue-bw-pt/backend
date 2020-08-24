
exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
        tbl.text('username', 128)
          .unique()
          .notNullable();
        tbl.text('password', 128)
          .notNullable();
        tbl.text('first_name', 128)
          .notNullable();
        tbl.text('last_name', 128)
          .notNullable();
        tbl.integer('role')
            .defaultTo(1);
      })
      .createTable('roles', tbl => {
        tbl.increments();
        tbl.text('name', 128)
          .unique()
          .notNullable();
      })
      .createTable('users_roles', tbl => {
        tbl.text('user_id')
          .references('id')
          .inTable('users');
        tbl.text('role_id')
          .references('id')
          .inTable('roles');        
      })
      .createTable('tickets', tbl => {
        tbl.increments();
        tbl.text('title', 128)
          .notNullable();
        tbl.text('description', 128)
          .notNullable();
        tbl.text('steps_taken', 512)
          .notNullable();
        tbl.text('category', 128)
          .notNullable();
        tbl.text('status');
        tbl.integer('creator_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users');
      })
      .createTable('ticketStatus', tbl => {
        tbl.increments();
        tbl.text('name', 128)
          .unique()
          .notNullable();       
      })
      .createTable('ticket_ticketStatus', tbl => {
        tbl.text('ticket_id')
          .references('id')
          .inTable('tickets');
        tbl.text('status_id')
          .references('id')
          .inTable('status');        
      })
      .createTable('ticket_resolver', tbl => {
        tbl.text('ticket_id')
          .references('id')
          .inTable('tickets');
        tbl.text('user_id')
          .references('id')
          .inTable('users');        
      })
      .createTable('comments', tbl => {
        tbl.increments();
        tbl.text('description', 512)
          .notNullable();
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users');
        tbl.integer('ticket_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('tickets');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('comments')
      .dropTableIfExists('tickets')
      .dropTableIfExists('users');
  };