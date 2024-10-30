const {Router} = require('express');
const CountryController = require('../controllers/ContryController');

const  router = Router();
const countryController = new CountryController();

router.get("/index", countryController.index);
router.get("/index/:id", countryController.indexOne);

module.exports = router;