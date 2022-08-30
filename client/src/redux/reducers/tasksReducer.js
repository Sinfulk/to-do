const tasksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TASKS':
      return payload;
    case 'DELETE_TODO':
      return [];

    default:
      return state;
  }
};

export default tasksReducer;
