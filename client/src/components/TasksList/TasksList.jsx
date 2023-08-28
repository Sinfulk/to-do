import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allTasksFetch } from '../../redux/actions/tasksAction';
import Buttons from '../Buttons/Buttons';
import Pagination from '../Pagination/Pagination';
import Task from '../Task/Task';
import styles from './TasksLitst.scss';

function TasksList() {
  const masage = useSelector((store) => store.masage);
  const allTasks = useSelector((store) => store.tasks);

  const [curentPage, setCurentPage] = useState(1);
  const [tasksPerPage] = useState(3);

  const lastTaskIndex = curentPage * tasksPerPage;
  const firstTaskIndex = lastTaskIndex - tasksPerPage;
  const currentTask = allTasks.slice(firstTaskIndex, lastTaskIndex);

  const paginate = (pageNumber) => setCurentPage(pageNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTasksFetch());
  }, []);

  return (
    <div className="tasksList">
      <div className="masage">{masage}</div>
      <Buttons />
      {(allTasks) ? (
        currentTask.map((el) => (
          <Task
            key={el.id}
            task={el}
            taskId={el.id}
            description={el.description}
            userName={el['User.name']}
            userEmail={el['User.email']}
            status={el.status}
            allTasks={allTasks}
            chnged={el.chnged}
          />
        ))
      ) : (
        <div className={styles.error}>
          {masage}
        </div>
      )}
      <Pagination
        tasksPerPage={tasksPerPage}
        totalTasks={allTasks.length}
        paginate={paginate}
      />
    </div>

  );
}

export default TasksList;


