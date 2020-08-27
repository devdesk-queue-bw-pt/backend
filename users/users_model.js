const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    getById
}

function add(user) {
    return db('users')
        .insert(user)  
        .then(ids => ({ id: ids[0] })); 
}

function find() {
    return db('users').orderBy('id');
}

function findBy(username) {
    return db('users').where({ username }).first();
}

function getById(id) {
    return db('users')
      .where({ id })
      .first();
}