module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": 0,
    }
};