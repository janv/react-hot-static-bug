# React Hot Loader 3.0 static class method bug

```
npm install
$(npm bin)/babel index.js
```

Output:

```
  ...
  _createClass(MyComponent, [{
    key: '__classArrow__REACT_HOT_LOADER__',
    value: function __classArrow__REACT_HOT_LOADER__() {
      return 'I m an arrow function on the class';
    }
  }, {
    key: '__instanceArrow__REACT_HOT_LOADER__',
    value: function __instanceArrow__REACT_HOT_LOADER__() {
      return 'I m an arrow function on the instance';
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  ...
```

It seems as if babel doesn't realize that the arrow function is defined
on the class, not on the prototype


