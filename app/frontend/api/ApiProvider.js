export default {
    fetchStacks: () => {
        return jsonRequest('stacks');
    },

    fetchStack: stackId => {
        return jsonRequest(`stacks/${stackId}`);
    },

    addQuestion: stackId => {
        return jsonRequest('questions', 'post', {stackId: stackId});
    },

    removeQuestion: questionId => {
        return jsonRequest(`questions/${questionId}`, 'delete');
    }
};

function jsonRequest(url, method = 'get', body = null) {
    return fetch(`/api/${url}`, {
        method: method,
        body: body
    }).then(res => {
        return res.json();
    });
}
