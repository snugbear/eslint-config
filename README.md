# snugbear eslint-config

ESLint settings for Snugbears

## Usage

You'll need to install eslint

`npm install --save-dev eslint`

And a bunch of packages and plugins for eslint

`npm install --save-dev eslint-config-standard eslint-config-standard-react eslint-plugin-promise eslint-plugin-react eslint-plugin-standard`


And then install the snugbear config

`npm install --save-dev @snugbear/eslint-config`

Then update your `.eslintrc` file to extend from the snugbear config

```js
{
  "root": true,
  "extends": [
    "@snugbear/eslint-config"
  ]
}
```

## Usage with Babel

Install some more packages

`npm install --save-dev babel-eslint@6 eslint-plugin-babel@3`

then update your `.eslintrc` config for `babel-eslint`

```js
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "@snugbear/eslint-config"
  ],
  "plugins": [
    "babel"
  ],
  "rules": {
    "arrow-parens": 0,
    "babel/arrow-parens": [2, "always"],

    "generator-star-spacing": 0,
    "babel/generator-star-spacing": 2
  }
}
```
