module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": 0,
      "react/button-has-type": 0,
    },
    "globals": {
    },
    "env": {
      "jest": true,
      "browser": true
    }
};

