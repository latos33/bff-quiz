
const apiClient = require('./apiClient');

const getAllQuestions = async (params = {}) => {
    const defaultParams = { amount: 10 };
    const response = await apiClient.get('/api.php', {
        params: { ...defaultParams, ...params },
    });
    return response.data.results;
};

module.exports = { getAllQuestions };