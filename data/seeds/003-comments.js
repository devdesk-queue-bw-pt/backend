
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1, 
          comments: 'You password has been reset.', 
          user_id: 'helper101', 
          ticket_id: 1
        },
        {
          id: 2, 
          comments: 'Hi Megan, I will be able to help you soon', 
          user_id: 'helper202', 
          ticket_id: 3
        },
        {
          id: 3, 
          comments: 'Has anyone seen my ticket yet?', 
          user_id: 'LJones2020', 
          ticket_id: 2
        }
      ]);
    });
};
