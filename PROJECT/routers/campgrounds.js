const express = require('express')
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const {isAuthenticated,validateCampground,isAuthor} = require('../middlewareforauth')
const campgrounds = require('../Controllers/campground')
const multer  = require('multer')
const {storage} = require('../CloudinaryConfig')
const upload = multer({ storage })


router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(upload.array('image'),validateCampground,catchAsync(campgrounds.newForm))


router.get('/new',isAuthenticated,campgrounds.rendernewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isAuthenticated,isAuthor,upload.array('image') ,validateCampground,catchAsync(campgrounds.editCampground))
    .delete(isAuthenticated,isAuthor,catchAsync(campgrounds.deleteCampground))



router.get('/:id/edit',isAuthenticated,isAuthor,catchAsync(campgrounds.rendereditCampground))


module.exports = router;