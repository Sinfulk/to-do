import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortTasks } from '../../redux/actions/tasksAction';
import styles from './Buttons.module.scss';

function Buttons() {
  const dispatch = useDispatch();
  const allTasks = useSelector((store) => store.tasks);
  const [sortName, setSortName] = useState(false);
  const [sortEmail, setSortEmail] = useState(false);
  const [sortStatus, setSortStatus] = useState(false);

  function sortHandle(key) {
    switch (key) {
      case 'User.name':
        setSortName(!sortName);
        return dispatch(sortTasks(allTasks, key, sortName));
      case 'User.email':
        setSortEmail(!sortEmail);
        return dispatch(sortTasks(allTasks, key, sortEmail));
      case 'status':
        setSortStatus(!sortStatus);
        return dispatch(sortTasks(allTasks, key, sortStatus));
      default:
        return '';
    }
  }

  return (
    <div className={styles.buttons}>
      <div className={styles.title}> Sort: </div>
      <button type="button" onClick={() => sortHandle('User.name')}>Name</button>
      <button type="button" onClick={() => sortHandle('User.email')}>Email</button>
      <button type="button" onClick={() => sortHandle('status')}>Status</button>
    </div>
  );
}

export default Buttons;
