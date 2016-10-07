# React Hot Loader 3.0 bug showcase: arrow functions as class properties

```
npm install
$(npm bin)/webpack-dev-server
```

- Open http://localhost:8080.
- Open web console
- Click the button in the app

React will complain that you're trying to call `setState` on an
unmounted component.

The problem disappears when adding the `es2015` preset to `.babelrc`
