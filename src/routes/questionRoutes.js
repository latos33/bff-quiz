const { Router } = require('express');
const { getQuestions } = require('../controllers/questionsController');

const router = Router();    
// GET /api/questions
router.get('/', getQuestions);

module.exports = router;
