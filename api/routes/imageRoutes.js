module.exports = function(app) {
    var imageList = require('../controllers/imageController');
    // imageList Routes
    app.route('/images')
      .get(imageList.list_all_images)
      .post(imageList.create_a_image)
      /*.delete(imageList.delete_images)*/;
  
    app.route('/images/:imageId')
      .get(imageList.read_a_image)
      .put(imageList.update_a_image)
      .delete(imageList.delete_a_image);
      
    app.route('/logout', function(req, res, next) {
      if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
          if(err) {
            return next(err);
          } else {
            return res.redirect('/');
          }
        });
      }
    });
};