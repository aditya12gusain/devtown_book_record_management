# devtown_book_record_management

Book record management for book stores and libraries
This is a book record management API Backend for the management of library records.

# Routes and Endpoints

✅: means completed this task

## /users

POST: Create a new user
GET: GET all the users ✅

## /users/{id}

example: /users/1, /users/2

GET: GET a user by id ✅
PUT: Update a user by id
DELETE: Delete a user by id ✅

## /users/subscription-details/{id}

GET: GET user subscription details 1. Date of subscription 2. Valid till 3. Fine if any

## /books

GET: GET all the books ✅
POST: Create/Add a new book

## /books/{id}

GET: GET a book by id ✅
PUT: Update a book by id

## /books/issued

GET: Get all the issued books

## /books/issued/withFine

# NOTE

Subscription plans
Basic (3 months)
Standard (6 months)
Premium (12 months)

If the subscription date is 01/10/21
and subscription type is standard
the valid till date will be 01/04/22

If he has issued book and the issued is to be returned at 01/03/22
and he misses it, then he gets a fine of Rs. 100

If he has issued book and the issued is to be returned at 01/03/22
if he missed it, and his subscription also expires, then he will get a fine of Rs. 200
