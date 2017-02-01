export default {
    fetchStacks: () => {
        return request('stacks');
    },

    fetchStack: stackId => {
        return request(`stacks/${stackId}`);
    },

    addStack: title => {
        return request('stacks', 'post', {title: title, quesitons: []});
    },

    removeStack: stackId => {
        return request(`stacks/${stackId}`, 'delete');
    },

    addQuestion: stackId => {
        return request('questions', 'post', {stackId: stackId});
    },

    removeQuestion: questionId => {
        return request(`questions/${questionId}`, 'delete');
    },

    updateQuestion: (questionId, data) => {
        return request(`questions/${questionId}`, 'put', data);
    }
};

function request(url, method = 'get', body = null) {
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
