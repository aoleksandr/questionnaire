export default {
    fetchStacks: () => {
        return jsonRequest('stacks');
    },

    fetchQuestions: stackId => {
        return jsonRequest(`stacks/${stackId}`);
    }
};

function jsonRequest(url) {
    return fetch(`/api/${url}`).then(res => {
        return res.json();
    });
}
