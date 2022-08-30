import { combineReducers } from 'redux';
import userReducer from './userReducer';
import masageReducer from './masageReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  user: userReducer,
  masage: masageReducer,
});

export default rootReducer;
