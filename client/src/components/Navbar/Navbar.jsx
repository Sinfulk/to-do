import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logoImag from '../assets/img/logo.svg';
import styles from './Navbar.module.scss';
import SigIn from '../Forms/SigIn/SigIn';
import Modal from '../Modal/Modal';
import { signOut } from '../../redux/actions/userAction';
import ToDoForm from '../Forms/ToDoForm/ToDoForm';

function Navbar() {
  const [sigInActive, setSigInActive] = useState(false);
  const [toDoFormActive, setToDoFormActive] = useState(false);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/"><img src={logoImag} alt="" height="50" /></Link>
        </div>
        <button type="button" className="" onClick={() => setToDoFormActive(true)}>
          New Task
        </button>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            {user.id ? (
              <button type="button" className="text-white animation" onClick={clickHandler}>
                SignOut
              </button>
            ) : (
              <button type="button" className="text-white animation" onClick={() => setSigInActive(true)}>
                SignIn
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal active={sigInActive} setActive={setSigInActive}>
        <SigIn setActive={setSigInActive} />
      </Modal>
      <Modal active={toDoFormActive} setActive={setToDoFormActive}>
        <ToDoForm setActive={setToDoFormActive} />
      </Modal>
    </>
  );
}

export default Navbar;
