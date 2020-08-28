const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    addComment,
    findComments,
    getTicketById,
    getCommentById,
    updateTicket,
    updateComment,
    deleteTicket,
    deleteComment  
}

function add(ticket) {
    return db('tickets')
        .insert(ticket)  
        .then(ids => {
            return getTicketById(ids[0]);
        });
}

function addComment(comment) {
    return db('comments')
        .insert(comment)  
        .then(ids => {
            return getCommentById(ids[0]);
        });
}

// INSERT INTO comments(id, comment, user_id, ticket_id)
// VALUES (1, "Comment for ticket 1", 1, 1);

function find() {
    return db('tickets').orderBy('id');
}

function findComments() {
    return db('comments').orderBy('id');
}

function findBy(username) {
    return db('tickets').where({ username }).first();
}

function getTicketById(id) {
    return db('tickets')
      .first()
      .where({ id });
}

function getCommentById(id) {
    return db('comments')
      .first()
      .where({ id })      
}

function updateTicket(changes, id) {
    return db('tickets')
        .where('id', Number(id))
        .update(changes)
        .then(ids => {
            return db('tickets').where({ id: Number(id) });
        })
}

function updateComment(changes, id) {
    return db('comments')
        .where('id', Number(id))
        .update(changes)
        .then(ids => {
            return db('comments').where({ id: Number(id) });
        })
}

function deleteTicket(id) {
    return db('tickets')
      .where('id', Number(id))
      .del()
}

function deleteComment(id) {
    return db('comments')
      .where('id', Number(id))
      .del()
}