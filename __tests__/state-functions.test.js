import { toggleDone, deleteTodo, addTodo } from '../app/state-functions';

test('tooggleDone completes an incomplete todo', () => {
  const startState = {
    todos: [{ id: 1, done: false, name: 'Buy Milk' }]
  };

  const finState = toggleDone(startState, 1);

  expect(finState.todos).toEqual([
    { id: 1, done: true, name: 'Buy Milk' }
  ]);
});

test('deleteTodo deletes the todo it is given', () => {
  const startState = {
    todos: [{ id: 1, done: false, name: 'Buy Milk' }]
  };

  const finState = deleteTodo(startState, 1);

  expect(finState.todos).toEqual([]);
});

test('deleteTodo deletes todo with given id', () => {
  const startState = {
    todos: [{ id: 1, done: true, name: 'Buy Milk' }]
  }

  const finState = deleteTodo(startState, 1)

  expect(finState.todos).toEqual([])
})

// test('addTodo adds a todo', () => {
//   const startState = {
//     todos: []
//   }

//   const todo = {
//     name: 'Buy Butter'
//   }

//   const finState = addTodo(startState, todo)

//   expect(finState.todos).toEqual([
//     { done: false, name: 'Buy Butter'}
//   ])
// })
