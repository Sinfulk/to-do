import * as endPoints from '../../config/endPoints';
import { deleteMasageAC, setMasageAC } from './masageAction';

export const tasksAC = (payload) => ({ type: 'SET_TASKS', payload });

export const allTasksFetch = () => async (dispatch) => {
  const response = await fetch(endPoints.allTasks(), {
    credentials: 'include',
  });
  const { allTasks, error } = await response.json();
  if (response.ok) {
    dispatch(tasksAC(allTasks));
    dispatch(deleteMasageAC());
  } else {
    dispatch(setMasageAC(error));
  }
};

export const taskFetch = (payload) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.newTask(), {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    const { allTasks, error } = await response.json();

    if (response.ok) {
      dispatch(tasksAC(allTasks));
      dispatch(setMasageAC('You have created a new task'));
      setTimeout(() => dispatch(deleteMasageAC()), 5000);
    } else {
      dispatch(setMasageAC(error));
      setTimeout(() => dispatch(deleteMasageAC()), 5000);
    }
  } catch (error) {
    dispatch(
      setMasageAC('Text is too long. Text must not exceed 255 characters.'),
    );
    setTimeout(() => dispatch(deleteMasageAC()), 5000);
  }
};

export const taskStatusFetch = (allTasks, id) => async (dispatch) => {
  const response = await fetch(endPoints.editStatusTask(id), {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
  });

  if (response.ok) {
    const copyTasks = JSON.parse(JSON.stringify(allTasks));
    copyTasks.forEach((el) => (el.id === id ? (el.status = !el.status) : el));
    dispatch(tasksAC(copyTasks));
    dispatch(deleteMasageAC());
  } else {
    dispatch(setMasageAC('Your are not logged in'));
    setTimeout(() => dispatch(deleteMasageAC()), 5000);
  }
};

export const editedTaskFetch =
  (allTasks, id, { description }) =>
  async (dispatch) => {
    const response = await fetch(endPoints.editTask(), {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',

      body: JSON.stringify({ id, description }),
    });

    if (response.ok) {
      const copyTasks = JSON.parse(JSON.stringify(allTasks));
      copyTasks.forEach((el) => {
        if (el.id === id) {
          el.description = description;
          el.chnged = true;
        }
      });
      dispatch(tasksAC(copyTasks));
      dispatch(setMasageAC('Task changed!'));
      setTimeout(() => dispatch(deleteMasageAC()), 5000);
    } else {
      dispatch(setMasageAC('Your are not logged in!'));
      setTimeout(() => dispatch(deleteMasageAC()), 5000);
    }
  };

export const deleteTaskFetch = (id) => async (dispatch) => {
  const response = await fetch(endPoints.taskDelete(id), {
    method: 'delete',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
  });

  const { allTasks, error } = await response.json();

  if (response.ok) {
    dispatch(tasksAC(allTasks));
    dispatch(setMasageAC('Task deleted!'));
    setTimeout(() => dispatch(deleteMasageAC()), 5000);
  } else {
    dispatch(setMasageAC(error));
    setTimeout(() => dispatch(deleteMasageAC()), 5000);
  }
};

export const sortTasks = (alltasks, key, sort) => async (dispatch) => {
  const sortTask = [...alltasks];
  let result;
  if (sort) {
    result = sortTask.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  } else result = sortTask.sort((a, b) => (a[key] < b[key] ? 1 : -1));

  dispatch(tasksAC(result));
};
