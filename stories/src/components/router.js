const express = require('express');
const router = express.Router();
const storyRoutes = require('./api_routes.js');

router.post('/signup', storyRoutes.createUser);
router.post('/signin', storyRoutes.signinUser);
router.get('/home/:id', storyRoutes.findUser);
router.get('/home/:id', storyRoutes.authorization);
router.delete('/deleteStory/:postId', storyRoutes.deleteStory);
router.post('/home/:id/create', storyRoutes.submitStory);
router.get('/:id/story/:title', storyRoutes.readStory);

module.exports = router;
