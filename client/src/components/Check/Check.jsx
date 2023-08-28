import React from 'react';
import { BiCheck } from 'react-icons/bi';

function Check({ status }) {
  return (
    <div >
      {status
       && <BiCheck className="BiCheck" />}
    </div>
  );
}

export default Check;
