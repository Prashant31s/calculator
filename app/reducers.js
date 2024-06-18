// reducers.js

const initialState = {
  input: '0',
  result: '',
  history: []
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DIGIT':
      const newInput = state.input === '0' ? action.payload : state.input + action.payload;
      return {
        ...state,
        input: newInput
      };
    case 'CLEAR_INPUT':
      return {
        ...state,
        input: '0',
        result: ''
      };
    case 'CALCULATE_RESULT':
      try {
        const result = eval(state.input); // Use eval cautiously in production
        const expression = state.input + ' = ' + result.toString();
        return {
          ...state,
          result: result.toString(),
          history: [...state.history, { expression, result: result.toString() }]
        };
      } catch (error) {
        return {
          ...state,
          result: 'Error'
        };
      };
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: []
      };
    default:
      return state;
  }
};

export default calculatorReducer;
