import React from 'react';
import styles from './Paginaton.module.scss';

function Pagination({ tasksPerPage, totalTasks, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={styles.pagination}>
        {
          pageNumbers.map((number) => (
            <li className={styles.pageItem} key={number}>
              <button type="button" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pagination;
