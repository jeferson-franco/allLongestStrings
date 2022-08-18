function solution(inputArray) {
    return inputArray.reduce((r, s, i) => {
        if (!i || r[0].length < s.length) {
            return [s];
        }
        if (r[0].length === s.length) {
            r.push(s);
        }
        return r;
    }, []);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test allLongestStrings
