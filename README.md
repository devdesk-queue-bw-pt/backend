# Backend

## API Base URL
https://devdesklambda.herokuapp.com/

Server Running Check
GET /

Register User (Helper and Student)
POST /api/auth/register

BODY

{
    "username": <username (string)>, 
    "password": <pasword (string)>, 
    "first_name": <first_name (string)>, 
    "last_name": <Last_name (string)>,
    "role": <role (integer) : defaults to student, student = 1, helper = 2>
}

User Login
POST /api/auth/login

BODY

{
    "username": <username (string)>, 
    "password": <pasword (string)>
}

RETURNS

{
    "message": <welcome username (string)> ,
    "token": <JWT token (string)>
}