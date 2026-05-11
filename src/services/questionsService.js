const apiClient = require('./apiClient');

const getAllQuestions = async () => {
    const response = await apiClient.get('/api_questions.php');

    return response.data.results;
}

module.exports = { getAllQuestions };