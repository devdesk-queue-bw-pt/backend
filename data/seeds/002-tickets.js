
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        { 
          id: 1, 
          title: 'Can not login to slack', 
          description: 'Password not working for slack', 
          steps_taken: 'Tried to reset, but can not', 
          category: 'Password Reset', 
          resolved: false, 
          helper: 'Kim', 
          user_id: 'LJones2020'
        },
        { 
          id: 2, 
          title: 'Can not submit sprint form', 
          description: 'I get a message of form not available', 
          steps_taken: 'Refreshed the page and still got the meesage.', 
          category: 'Lambda Forms', 
          resolved: false, 
          helper: '', 
          user_id: 'LJones2020'
        },
        { 
          id: 3, 
          title: 'Need help with GitHub',
          description: 'Issues resolving merge conflicts', 
          steps_taken: 'Tried to resolve and re-push.', 
          category: 'GitHub', 
          resolved: false, 
          helper: 'James', 
          user_id: 'GoodMeg'
        },
        { 
          id: 4, 
          title: '', 
          description: 'Password not working for training kit.', 
          steps_taken: 'Tried to reset, but can not', 
          category: 'Password Reset', 
          resolved: false, 
          helper: '', 
          user_id: 'GoodMeg'
        },
      ]);
    });
};
