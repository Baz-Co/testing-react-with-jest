https://www.sitepoint.com/test-react-components-jest/

## Jest

First released in 2014

state-functions.test.js
`describe` and `it`:
```
import { toggleDone } from '../app/state-functions';

describe('toggleDone', () => {
  describe('when given an incomplete todo', () => {
    it('marks the todo as completed', () => {
    });
  });
});
```

`test`:
```
import { toggleDone } from '../app/state-functions';

test('toggleDone completes an incomplete todo', () => {
});
```

assertions & `expect`:
```
const startState = {
  todos: [{ id: 1, done: false, name: 'Buy Milk' }]
};

const finState = toggleDone(startState, 1);

expect(finState.todos).toEqual([
  { id: 1, done: true, name: 'Buy Milk' }
]);
```

`toEqual` is for objects & arrays; `toBe` is for primitive values (strings, numbers)


* npm test -- --coverage
* npm test -- watch

A `spy` is a function whose implementation you don't really care about; you just care about when and how it is executed.

Jest Snapshot Tests - Jest renders the React component under test and stores the result in a JSON file. Every time the test runs, Jest checks that the REact compinent still renders the same output as the snapshot. The snapshot test highlights any component changes so you can avoid side effects or you can tell jest to update the snapshot.