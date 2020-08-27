const router = require('express').Router();

const Tickets = require('./tickets_model');
const Users = require('../users/users_model')

router.post('/submit', (req, res) => {
  const ticketData = req.body;

  Tickets.add(ticketData)
    .then(ticket => { 
      res.status(201).json(ticket);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to submit ticket' })
    })
});

router.post('/submit/comment', (req, res) => {
    const commentData = req.body;

    Tickets.addComment(commentData)
        .then(comment => {
            res.status(201).json(comment);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to submit comment' });
        });
})

router.get('/', (req, res) => {

  Tickets.find()
  .then(tickets => {
    res.json(tickets);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tickets' });
  });
});

router.get('/comments', (req, res) => {

    Tickets.findComments()
    .then(comments => {
      res.json(comments);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get comments' });
    });
  });



module.exports = router;