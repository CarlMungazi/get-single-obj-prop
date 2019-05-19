# get-single-obj-prop

> Quickly navigate to a single property in a complex object. Based on [this](https://dev.to/lucagez/how-to-navigate-complex-objects-in-1-line-of-js-4b63)

## Install

```
$ npm install get-single-obj-prop
```

## Usage

```js
const getSingleObjProp = require('get-single-obj-prop');

const obj = {
  a: {
    b: {
      c: 'test',
    },
  },
};

getSingleObjProp(obj, 'a.b.c'); //=> 'test'
```

## License

MIT © [Carl Mungazi](https://carlmungazi.com)