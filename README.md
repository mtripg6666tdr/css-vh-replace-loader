# css-vh-replace-loader
This loader replaces `<num>vh` with `calc(var(--vh, 1vh) * <num>)`.

Mobile browsers implement the vh-unit differently. This webpack loader replaces `vh` units in css with `--vh` global variables.

for example
```css
  height: 100vh;
```
the above code will be converted into
```css
  height: 100vh; /*  <- fallback */
  height: calc(var(--vh,1vh)*100);
```

# Why?
- Easy to set up
  - Install, add some lines to `webpack.config.js` and entrypoint, and you are ready to go!
- No need to edit existing css files
  - No need to find and replace `vh` units by looking over all css files. What you should use is only `vh` units, same as in the past.
- No need to waste in lines for fallback
  - You can write more-readable code.

==> ***No need to consider mobile browsers' `vh` implementation!***

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
          // ... some loaders like `style-loader`
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
...next, just add the definition of `--vh` global variables
```js
  document.documentElement.style.setProperty("--vh", window.innerHeight/ 100 + "px");
```
...and you are ready to go!

## License 
MIT
