const masageReducer = (state = ' ', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_MASAGE':
      return payload;
    case 'DELETE_MASAGE':
      return ' ';
    default:
      return state;
  }
};

export default masageReducer;
