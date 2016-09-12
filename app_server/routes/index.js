var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/location');
var ctrlOthers = require('../controllers/others');

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/net', ctrlLocations.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

module.exports = router;