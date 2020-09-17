const { User,Thought} = require('../models');

const UserController={
// create a user
createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },
//get all user
 getAllUser({ body }, res) {
    User.find({})
      .populate({
        path: 'trought',
        select: '-__v'
      })
      .populate({
          path:'friends',
          select:'-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  //get a user by id
  getUserById({ params }, res) {
      User.findOne({_id:params.id})
      .populate({
        path: 'trought',
        select: '-__v'
      })
      .populate({
          path:'friends',
          select:'-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  //update user info
  updateUser({ params,body }, res) {
      User.findOneAndUpdate({_id:params.id},body,{new:true,runValidators:true})
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  //delete user by id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
  },

  addFriend(req, res) {
   /* User.findOneAndUpdate(
      {_id:req.params.userId},
      {$addToSet:{friends:{friendsId:req.params.friendId}}}
    )
    .then(dbUserData => {
      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });*/
  },

  deleteFriend({ body }, res) {
},


}
  
module.exports = UserController;