const router = require('express').Router() ;
const userController = require('../controllers/user')


router.get('/Signin' , userController.Signin)
router.post('/Signin' , userController.SignUser)
router.get('/Login' , userController.Login)
router.post('/Login' , userController.LoginUser)

module.exports= router