var mongoose = require('mongoose'),
Task = mongoose.model('Images');

exports.list_all_images = function(req, res) {
Task.find({}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};


exports.create_a_image = function(req, res,err) {
var new_task = new Task(req.body);
//console.log(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/*exports.delete_users = function(req, res) {
Task.deleteMany(req.params.name,function(err, task) {
  if (err)
    res.send(err);
  res.json({ message: 'All Users Successfully Deleted' });
});
};*/

exports.read_a_image = function(req, res) {
Task.findById(req.params.imageId, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};


exports.update_a_image = function(req, res) {
Task.findOneAndUpdate({_id: req.params.imageId}, req.body, {new: true}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};


exports.delete_a_image = function(req, res) {
Task.deleteOne({
  _id: req.params.imageId
}, function(err, task) {
  if (err)
    res.send(err);
  res.json({ message: 'image successfully deleted' });
});
};
