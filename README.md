# css-vh-replace-loader
This loader replaces `<num>vh` with `calc(var(--vh, 1vh) * <num>`.

Mobile browsers implement the vh-unit differently. This webpack loader replace `vh` units in css with `--vh` global variables.

# Install 
```sh
npm i css-vh-replace-loader
```

# Usage
use after `css-loader` in webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-vh-replace-loader"
          },
          {
            loader: "css-loader",
            options:{
              sourceMap: true
            }
          },
        ]
      }
    ]
  }
}
```
...and just add the definition of `--vh` global variables
```js
  document.documentElement.style.setProperty("--vh", window.innerHeight/ 100 + "px");
```

## License 
MIT