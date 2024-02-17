const express = require('express');
const userController = require('../../controllers/user-controllers'); 
const {AuthRequestValidatorMiddlewares} = require('../../middlewares/index');

const router= express.Router();

router.post(
    '/signup',
    AuthRequestValidatorMiddlewares.validateUserAuth,
    userController.create
);

router.post(
    '/signin',
    AuthRequestValidatorMiddlewares.validateUserAuth,
    userController.signIn
);
  
router.get(
    '/isauthenticated',
    userController.isAuthenticated
)


module.exports = router;