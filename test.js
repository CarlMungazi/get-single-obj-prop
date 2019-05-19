import test from 'ava';
import getSingleObjProp from './index';

test('it returns the correct property', t => {
  const obj = {
    a: {
      b: {
        c: 'test',
      },
    },
  };

  t.is(getSingleObjProp(obj, 'a.b.c'), "test");
});