/* Action Types */
const TODOS_TODOADDED = "todos/todoAdded";
const TODOS_TODOTOGGLED = "todos/todoToggled";
const TODOS_TODODELETED = "todos/todoDeleted";
const TODOS_COLORSELECTED = "todos/colorSelected";
const TODOS_ALLCOMPLETED = "todos/allCompleted";
const TODOS_COMPLETEDCLEARED = "todos/completedCleared";

/* Action Creators */
export const addTodoAction = (text) => ({ type: TODOS_TODOADDED, payload: { text } });
export const toggleTodoAction = (id) => ({ type: TODOS_TODOTOGGLED, payload: { id } });
export const deleteTodoAction = (id) => ({ type: TODOS_TODODELETED, payload: { id } });
export const selectTodoColorAction = (id, color) => ({ type: TODOS_COLORSELECTED, payload: { id, color } });
export const completeAllTodosAction = () => ({ type: TODOS_ALLCOMPLETED });
export const clearCompletedTodosAction = () => ({ type: TODOS_COMPLETEDCLEARED });

/* Initial State */
const initialState = [
  { id: 0, text: "Learn React", completed: true, color: "green" },
  { id: 1, text: "Learn Redux", completed: true, color: "blue" },
  { id: 2, text: "Build something fun!", completed: false, color: "red" },
  {
    id: 3,
    text: "Read books: 'The Pragmatic Programmer', 'Clean Code: A Handbook of Agile Software Craftsmanship', 'Code Complete: A Practical Handbook of Software Construction', 'Head First Design Patterns'.",
    completed: false,
  },
];

/* Helper Functions */
const generateNextTodoId = (todos) => todos.reduce((prevVal, currentTodo) => Math.max(prevVal, currentTodo.id) + 1, 0);

/* Reducer */
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_TODOADDED:
      return [...state, { id: generateNextTodoId(state), text: action.payload.text, completed: false }];

    case TODOS_TODOTOGGLED:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));

    case TODOS_TODODELETED:
      return state.filter((todo) => todo.id !== action.payload.id && todo);

    case TODOS_COLORSELECTED:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, color: action.payload.color } : todo));

    case TODOS_ALLCOMPLETED:
      return state.map((todo) => ({ ...todo, completed: true }));

    case TODOS_COMPLETEDCLEARED:
      return state.filter((todo) => todo.completed === false);

    default:
      return state;
  }
};

export default todosReducer;
