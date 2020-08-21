
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'helper101', 
          password: 'WordIsPassed', 
          first_name: 'Kim', 
          last_name: 'Fields', 
          role: 'Helper'
        },
        {
          id: 2, 
          username: 'LJones2020', 
          password: 'passTheWord', 
          first_name: 'Leslie', 
          last_name: 'Jones', 
          role: 'Student'
        },
        {
          id: 3, 
          username: 'GoodMeg', 
          password: 'passTheWord', 
          first_name: 'Megan', 
          last_name: 'Good', 
          role: 'Student'
        },
        {
          id: 4, 
          username: 'helper202', 
          password: 'WordIsPassed', 
          first_name: 'Rick', 
          last_name: 'James', 
          role: 'Helper'
        }
      ]);
    });
};
