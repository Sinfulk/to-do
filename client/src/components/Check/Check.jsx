import React from 'react';
import { BiCheck } from 'react-icons/bi';
import styles from './Check.module.scss';

function Check({ status }) {
  return (
    <div className={styles.checked}>
      {status
       && <BiCheck className="BiCheck" />}
    </div>
  );
}

export default Check;
