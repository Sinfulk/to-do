import * as endPoints from '../../config/endPoints';
import { deleteMasageAC, setMasageAC } from './masageAction';

export const addUserAC = (payload) => ({ type: 'SET_USER', payload });
export const deleteUserAC = () => ({ type: 'DELETE_USER' });

export const signIn = (payload) => async (dispatch) => {
  const response = await fetch(endPoints.signIn(), {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (response.ok) {
    dispatch(addUserAC(data));
  } else {
    dispatch(setMasageAC('Wrong login or password!'));
    setTimeout(() => dispatch(deleteMasageAC()), 5000);
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.checkAuth(), {
      credentials: 'include',
    });
    const data = await response.json();
    if ('error' in data) {
      //можно обработать ошибку авторизации 
    }
    if (response.ok) {
      dispatch(addUserAC(data));
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.ok) {
    dispatch(deleteUserAC());
  }
};
