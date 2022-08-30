import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../redux/actions/userAction';
import TasksList from '../TasksList/TasksList';
import styles from './Home.module.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <div className={styles.home}>
      <TasksList />
    </div>
  );
}

export default Home;
