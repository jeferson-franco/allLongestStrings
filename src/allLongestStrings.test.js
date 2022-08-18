const solution = require('./allLongestStrings.js');

test('test 1', () => {
    expect(solution(['aba', 'aa', 'ad', 'vcd', 'aba'])).toEqual(['aba', 'vcd', 'aba']);
});

test('test 2', () => {
    expect(solution(['aa'])).toEqual(['aa']);
});

test('test 3', () => {
    expect(solution(['abc', 'eeee', 'abcd', 'dcd'])).toEqual(['eeee', 'abcd']);
});

test('test 4', () => {
    expect(solution(['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa'])).toEqual(['zzzzzz', 'abcdef', 'aaaaaa']);
});

test('test 5', () => {
    expect(solution(['enyky', 'benyky', 'yely', 'varennyky'])).toEqual(['varennyky']);
});

test('test 6', () => {
    expect(solution(['abacaba', 'abacab', 'abac', 'xxxxxx'])).toEqual(['abacaba']);
});

test('test 7', () => {
    expect(solution(['young', 'yooooooung', 'hot', 'or', 'not', 'come', 'on', 'fire', 'water', 'watermelon'])).toEqual(['yooooooung', 'watermelon']);
});

test('test 8', () => {
    expect(solution(['onsfnib', 'aokbcwthc', 'jrfcw'])).toEqual(['aokbcwthc']);
});

test('test 9', () => {
    expect(solution(['lbgwyqkry'])).toEqual(['lbgwyqkry']);
});

test('test 10', () => {
    expect(solution(['i'])).toEqual(['i']);
});
