const {Router} = require('express');
const { getAllQuestions } = require('../services/questionsController');

const router = Router();

// GET /api/questions
router.get('/', getAllQuestions);

module.exports = router;