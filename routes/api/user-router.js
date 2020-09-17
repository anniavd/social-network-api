const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

  } = require('../../controller/user-controller');


// Set up GET all and POST at /api/users
  // /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/.......
  router
  .route('/:userId/friends/:friendId')
  .post(addFriend)  
  .delete(deleteFriend);


module.exports = router;