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
    },

    updateQuestion: (questionId, data) => {
        return jsonRequest(`questions/${questionId}`, 'put', data);
    }
};

function jsonRequest(url, method = 'get', body = null) {
    return fetch(`/api/${url}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: method,
        body: body ? JSON.stringify(body) : null
    }).then(res => {
        return res.json();
    });
}
