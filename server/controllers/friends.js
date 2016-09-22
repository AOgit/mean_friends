console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req,res){
    
    Friend.find({}, function(err, friends){
      if (err) {
        console.log("something went wrong");
      } else {
        console.log("successful");
        res.json(friends)
      }
    })

  };
  this.create = function(req,res){
    
    var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});

    friend.save(function(err){
      if (err) {
        console.log("something went wrong");
      } else {
        console.log('successful');
      }
    }) 
  };
  this.update = function(req,res){
    
    Friend.update({_id: req.params.id}, {$set: {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday}}, function(err){
      if (err) {
        console.log("something went wrong");
      } else {
        console.log("successful");
      }
    })

  };
  this.delete = function(req,res){
    
    Friend.remove({_id: req.params.id}, function(err){
        if (err) {
          console.log(req.params.id);
          console.log("something's wrong");
        } else {
          console.log("successful");
        }
    })

  };
  this.show = function(req,res){
    Friend.find({_id: req.params.id}, function(err, user){
      if (err) {
        console.log("something went wrong");
        console.log(user);
      } else {
        console.log('successful');
        res.json(user);
      }
    })
  };
}
module.exports = new FriendsController(); // what does this export?