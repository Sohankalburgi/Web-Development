const express = require('express')

const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const router = express.Router();
const {storeReturnTo} = require('../middlewareforauth')
const user = require('../Controllers/user')


router.route('/register')
    .get(user.renderregister)
    .post(catchAsync(user.register))

router.route('/login')
    .get(user.renderlogin)
    .post(storeReturnTo,
        passport.authenticate('local',{failureFlash : true, failureRedirect: '/login'}),
        user.login)

router.get('/logout',user.logout)


module.exports = router;