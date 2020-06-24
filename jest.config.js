module.exports = {
  moduleFileExtensions: [
    "css",
    "js",
    "jsx",
    "vue"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  rootDir: './',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  watchman: false
};