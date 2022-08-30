import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Task from './components/Task/Task';
import TasksList from './components/TasksList/TasksList';
import * as endPoints from './config/endPoints';
import { checkAuth } from './redux/actions/userAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Routes>
      <Route path="/2" element={<Task />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
