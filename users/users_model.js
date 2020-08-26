const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy
}

async function add(user) {
    // return db('users')
    //     .insert(user)  
        // .then(ids => ({ id: ids[0] })); 
    
    const [addUser] = await db('users')
        .returning(['id', 'username'])
        .insert(user);

    return addUser;
}

function find() {
    return db('users').orderBy('id');
}

function findBy(username) {
    return db('users').where({ username }).first();
}