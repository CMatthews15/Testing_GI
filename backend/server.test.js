const { getQuestions, getEvaluation, app } = require('./server');

// test error messages from evaluation function 
jest.mock('./server', () => ({
    getEvaluation: jest.fn(() => {
        return {
            error: 'Invalid response from GPT. Please try again.',
        };
    }),
    getQuestions: jest.fn(() => {
        return {
            error: 'Invalid response from GPT. Please try again.',
        };
    }),
}));


// test error messages from evaluation function
test('getEvaluation function gives error if api gives invalid response', async () => {

    const response = await getEvaluation('What is JavaScript?', 'JavaScript is a programming language');
    expect(response).toEqual({
        error: 'Invalid response from GPT. Please try again.',
    })
}
);

// test error messages from questions function
// test combinations of parameters

test('Quiz options set 1', async () => {
    const response = await getQuestions('aws', 'novice', 5, 'master oogway');
    expect(response).toEqual({
        error: 'Invalid response from GPT. Please try again.',
    })
});

test('Quiz options set 2', async () => {
    const response = await getQuestions('golang', 'intermediate', 10, 'normal');
    expect(response).toEqual({
        error: 'Invalid response from GPT. Please try again.',
    })
});

test('Quiz options set 3', async () => {
    const response = await getQuestions('aws', 'expert', 15, 'jedi');
    expect(response).toEqual({
        error: 'Invalid response from GPT. Please try again.',
    })
});