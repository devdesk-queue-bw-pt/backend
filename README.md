# Backend

## API Base URL
https://devdesklambda.herokuapp.com/

Server Running Check
GET /

### Register User (Helper and Student)
POST /api/auth/register

BODY

{
    "username": <username (string)>, 
    "password": <pasword (string)>, 
    "first_name": <first_name (string)>, 
    "last_name": <Last_name (string)>,
    "role": <role (integer) : defaults to student, student = 1, helper = 2>
}

RETURNS

{
    "id": <username (string)>,
    "title": <username (string)>,
    "description": <username (string)>,
    "steps_taken": <username (string)>,
    "category": <username (string)>,
    "status": <username (string)>,
    "creator_id": <user (string)>
}

### User Login
POST /api/auth/login

BODY

{
    "username": <username (string)>, 
    "password": <pasword (string)>
}

RETURNS

{
    "message": <welcome name (string)> ,
    "token": <JWT token (string)>
}

### Create Ticket
POST /api/tickets/submit

BODY

{
    "title": <title (string)>,
    "description": <description (string)>,
    "steps_taken": <steps_taken (string)>,
    "category": <category (string)>,
    "status": <status (string)>,
    "creator_id": <user_id of creator (integer)>
}

RETURNS

{
    "id": <id (integer)>,
    "title": <title (string)>,
    "description": <description (string)>,
    "steps_taken": <steps_taken (string)>,
    "category": <category (string)>,
    "status": <status (string)>,
    "creator_id": <user_id of creator (integer)>
}

### Get Tickets
GET /api/tickets

RETURNS array of all tickets

{
    "id": <id (integer)>,
    "title": <title (string)>,
    "description": <description (string)>,
    "steps_taken": <steps_taken (string)>,
    "category": <category (string)>,
    "status": <status (string)>,
    "creator_id": <user_id of creator (integer)>
}

### Add Comment
POST /api/tickets/submit/comment

BODY

{
    "comment": <comment (string)>,
    "user_id": <user_id of ticket creator (integer)>,
    "ticket_id": <ticket_id (integer)>
}

RETURNS

{
    "id": <id (integer)>,
    "comment": <comment (string)>,
    "user_id": <user_id of ticket creator (integer)>,
    "ticket_id": <ticket_id (integer)>
}

### Get Comments

GET /api/tickets/comments

RETURNS array of all comments

{
    "id": <id (integer)>,
    "comment": <comment (string)>,
    "user_id": <user_id of ticket creator (integer)>,
    "ticket_id": <ticket_id (integer)>
}

### Update Ticket

PUT /api/tickets/:id

BODY

{
    "title": <title (string)>,
    "description": <description (string)>,
    "steps_taken": <steps_taken (string)>,
    "category": <category (string)>,
    "status": <status (string)>,
    "creator_id": <user_id of creator (integer)>
}

RETURNS

[
    {
        "id": <id (integer)>,
        "title": <title (string)>,
        "description": <description (string)>,
        "steps_taken": <steps_taken (string)>,
        "category": <category (string)>,
        "status": <status (string)>,
        "creator_id": <user_id of creator (integer)>
    }
]

### Update Comment

PUT /api/tickets/comments/:id

BODY

{
    "comment": <comment (string)>,
    "user_id": <user_id of ticket creator (integer)>,
    "ticket_id": <ticket_id (integer)>
}

RETURNS

[
    {
        "id": <id (integer)>,
        "comment": <comment (string)>,
        "user_id": <user_id of ticket creator (integer)>,
        "ticket_id": <ticket_id (integer)>
    }
]

### Delete Tickets

DELETE /api/tickets/:id

RETURNS

{
    "message": <message (string)>
}

### Delete Comments

DELETE /api/tickets/comments/:id

RETURNS

{
    "message": <message (string)>
}