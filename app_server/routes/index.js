const express = require('express');
const router = express.Router();
// const ctrlMain=require('../controllers/others');
const ctrlLocations=require('../controllers/locations');
const ctrlOthers=require('../controllers/others');

//get homepage
// router.get ('/',ctrlMain.index);
// module.exports=router;

//Location pages
router.get ('/',ctrlLocations.homelist);
router.get ('/location/:locationid',ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);

//Other pages
router.get('/about',ctrlOthers.about);
module.exports=router;

/*/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express & Nodemon by Sameun Kim' });
});

module.exports = router;*/

const homepageController=(req,res)=>{
  res.render('index',{title:'Express'});
};
router.get('/',homepageController);

module.exports = router;
