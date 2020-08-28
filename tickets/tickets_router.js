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

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Tickets.deleteTicket(id)
  .then(deleted => {
    if (deleted) {
      res.json({ message: 'ticket deleted ' });
    } else {
      res.status(404).json({ message: 'Could not find ticket with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete ticket' });
  });
})

router.delete('/comments/:id', (req, res) => {
  const { id } = req.params;

  Tickets.deleteComment(id)
  .then(deleted => {
    if (deleted) {
      res.json({ message: 'Comment deleted ' });
    } else {
      res.status(404).json({ message: 'Could not find comment with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete comment' });
  });
})

module.exports = router;