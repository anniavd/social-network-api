const router = require('express').Router();
const {
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReactions,
    deleteReactions

  } = require('../../controller/thought-controller');


// Set up GET all and POST at /api/thoughts
  // /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReactions); 


// /api/thoughts/:thoughtId/reactions/:reactionId
router  
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReactions);


module.exports = router;