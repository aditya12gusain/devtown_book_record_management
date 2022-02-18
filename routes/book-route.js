const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getSingleBookById,
} = require("../controllers/book-controller");

// /books + / = /books/
/**
 * Route: /books
 * TYPE: GET
 * Description: Get all the books
 * Access: Public
 * Parameters: none
 */
router.get("/", getAllBooks);

// /books + /:id = /books/:id
/**
 * Route: /books/:id
 * TYPE: GET
 * Description: Get a book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getSingleBookById);

module.exports = router;
