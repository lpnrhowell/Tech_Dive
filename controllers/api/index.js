const router = require('express').Router();
//get access to user routes
const userRoutes = require('./user-routes');
//get access to post routes
const postRoutes = require('./post-routes');
//get access to comment routes
const commentRoutes = require('./comment-routes');


//initalizing routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;