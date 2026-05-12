const questionsService = require('../services/questionsService');

const getQuestions = async (req, res, next) => {
    try {
        const questions = await questionsService.getAllQuestions(req.query);

        res.status(200).json({
            success: true,
            total: questions.length,
            data: questions,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { getQuestions };