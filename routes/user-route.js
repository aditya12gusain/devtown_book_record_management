const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUserById,
  deleteUser,
} = require("../controllers/user-controller");

/**
 * Route: /users or /users/
 * TYPE: GET
 * Description: GET all users
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllUsers);

/**
 * Route: /users/:id
 * TYPE: GET
 * Description: GET user details by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getSingleUserById);

/**
 * Route: /users/:id
 * TYPE: DELETE
 * Description: deleting user by id
 * Access: Public
 * Parameters: id
 */
router.delete("/:id", deleteUser);

module.exports = router;
